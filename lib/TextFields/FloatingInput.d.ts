import * as React from "react";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text shown above the input */
  label: string;

  /** Name attribute for the input (used for forms) */
  name: string;

  /** ID for the input and label (defaults to `name` if not provided) */
  id?: string;

  /** Placeholder text (defaults to label if not provided) */
  placeholder?: string;

  /** Optional class name to apply to the outer wrapper */
  className?: string;
}

export declare const FloatingInput: React.FC<FloatingInputProps>;
