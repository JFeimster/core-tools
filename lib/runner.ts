import type { Tool } from "@/lib/types";

type Ok = {
  ok: true;
  outputs: { key: string; label: string; value: any; format?: "currency" | "number" | "text"; note?: string }[];
};

type Err = { ok: false; error: string };

export function runTool(tool: Tool, vals: Record<string, string>): Ok | Err {
  if (!tool.runner || tool.runner.type === "none") {
    return { ok: false, error: "No runner configured for this tool." };
  }

  if (tool.runner.type === "formula") {
    const ctx: Record<string, number> = {};
    for (const input of tool.inputs) {
      if (input.type === "number") {
        const raw = vals[input.key];
        const num = Number(String(raw ?? "").replace(/[, ]/g, ""));
        if (!Number.isFinite(num)) throw new Error(`Invalid number for "${input.label}"`);
        ctx[input.key] = num;
      }
    }

    const outputs = tool.runner.outputs.map((o) => {
      const value = safeEval(o.expr, ctx);
      return { key: o.key, label: o.label, value, format: o.format, note: o.note };
    });

    return { ok: true, outputs };
  }

  return { ok: false, error: "Unsupported runner type." };
}

/**
 * safeEval: supports + - * / ( ) and variable names that exist in ctx.
 * No functions. No property access. No strings. No eval().
 */
function safeEval(expr: string, ctx: Record<string, number>) {
  const tokens = tokenize(expr);
  const rpn = toRpn(tokens);
  return evalRpn(rpn, ctx);
}

type Tok =
  | { t: "num"; v: number }
  | { t: "var"; v: string }
  | { t: "op"; v: "+" | "-" | "*" | "/" }
  | { t: "lp" }
  | { t: "rp" };

function tokenize(expr: string): Tok[] {
  const s = expr.trim();
  const out: Tok[] = [];
  let i = 0;

  while (i < s.length) {
    const c = s[i];

    if (c === " " || c === "\n" || c === "\t") {
      i++;
      continue;
    }

    if (c === "(") { out.push({ t: "lp" }); i++; continue; }
    if (c === ")") { out.push({ t: "rp" }); i++; continue; }

    if (c === "+" || c === "-" || c === "*" || c === "/") {
      out.push({ t: "op", v: c });
      i++;
      continue;
    }

    // number
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const num = Number(s.slice(i, j));
      if (!Number.isFinite(num)) throw new Error(`Bad number: ${s.slice(i, j)}`);
      out.push({ t: "num", v: num });
      i = j;
      continue;
    }

    // variable
    if (/[A-Za-z_]/.test(c)) {
      let j = i;
      while (j < s.length && /[A-Za-z0-9_]/.test(s[j])) j++;
      out.push({ t: "var", v: s.slice(i, j) });
      i = j;
      continue;
    }

    throw new Error(`Unsupported character in expression: "${c}"`);
  }

  return out;
}

function prec(op: "+" | "-" | "*" | "/") {
  return op === "*" || op === "/" ? 2 : 1;
}

function toRpn(tokens: Tok[]) {
  const out: Tok[] = [];
  const stack: Tok[] = [];

  for (const tok of tokens) {
    if (tok.t === "num" || tok.t === "var") out.push(tok);
    else if (tok.t === "op") {
      while (stack.length) {
        const top = stack[stack.length - 1];
        if (top.t === "op" && prec(top.v) >= prec(tok.v)) out.push(stack.pop()!);
        else break;
      }
      stack.push(tok);
    } else if (tok.t === "lp") stack.push(tok);
    else if (tok.t === "rp") {
      while (stack.length && stack[stack.length - 1].t !== "lp") out.push(stack.pop()!);
      const lp = stack.pop();
      if (!lp || lp.t !== "lp") throw new Error("Mismatched parentheses");
    }
  }

  while (stack.length) {
    const tok = stack.pop()!;
    if (tok.t === "lp" || tok.t === "rp") throw new Error("Mismatched parentheses");
    out.push(tok);
  }

  return out;
}

function evalRpn(rpn: Tok[], ctx: Record<string, number>) {
  const st: number[] = [];
  for (const tok of rpn) {
    if (tok.t === "num") st.push(tok.v);
    else if (tok.t === "var") {
      if (!(tok.v in ctx)) throw new Error(`Unknown variable: ${tok.v}`);
      st.push(ctx[tok.v]);
    } else if (tok.t === "op") {
      const b = st.pop();
      const a = st.pop();
      if (a === undefined || b === undefined) throw new Error("Bad expression");
      if (tok.v === "+") st.push(a + b);
      if (tok.v === "-") st.push(a - b);
      if (tok.v === "*") st.push(a * b);
      if (tok.v === "/") st.push(b === 0 ? 0 : a / b);
    }
  }
  if (st.length !== 1) throw new Error("Bad expression");
  return st[0];
}
