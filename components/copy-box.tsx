"use client";

import { useState } from "react";

export function CopyBox({ title, value }: { title: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 900);
  }

  return (
    <div className="brut-border bg-[color:var(--paper)] p-4 brut-shadow">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="text-xs uppercase font-black tracking-widest">{title}</div>
        <button className="brut-btn px-3 py-2 text-xs" onClick={onCopy} type="button">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <textarea
        className="mt-3 w-full min-h-[260px] brut-border bg-black/20 p-3 font-mono text-xs"
        value={value}
        readOnly
      />
    </div>
  );
}
