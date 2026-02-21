export type ToolInput =
  | {
      key: string;
      label: string;
      type: "number" | "text";
      placeholder?: string;
      defaultValue?: string;
    }
  | {
      key: string;
      label: string;
      type: "select";
      options: { label: string; value: string }[];
      defaultValue?: string;
    };

export type ToolRunnerSpec =
  | {
      type: "formula";
      // Minimal safe runner: named outputs computed via supported ops (+ - * /) over numeric inputs.
      outputs: {
        key: string;
        label: string;
        format?: "currency" | "number" | "text";
        expr: string;
        note?: string;
      }[];
    }
  | {
      type: "none";
    };

export type Tool = {
  slug: string;
  brand: string;
  name: string;
  oneLiner?: string;
  pain: string;
  artifact: string;
  inputs: ToolInput[];
  logic: string;
  ctaLabel: string;
  ctaUrl: string;
  tags: string[];
  runner?: ToolRunnerSpec;
};
