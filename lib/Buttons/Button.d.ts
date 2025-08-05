import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export declare const Button: React.FC<ButtonProps>;
