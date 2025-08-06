// customThemeProvider.d.ts

import { ReactNode } from "react";

type Theme = {
  themeKey: string;
  customStyles: any; // Replace `any` with a proper type if you have a defined theme structure
};

type CustomThemeContextType = {
  theme: Theme;
  previewTheme: (key: string) => void;
  saveTheme: () => void;
  cancelTheme: () => void;
  currentThemeKey: string;
  committedThemeKey: string;
};

export declare const CustomThemeProvider: React.FC<{
  children: ReactNode;
}>;

export declare const useCustomTheme: () => CustomThemeContextType;
