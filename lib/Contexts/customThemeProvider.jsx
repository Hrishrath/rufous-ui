import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { APP_THEMES } from "../utils/constants";

const CustomThemeContext = createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [committedThemeKey, setCommittedThemeKey] = useState("default");
  const [previewThemeKey, setPreviewThemeKey] = useState("default");
  const [settings, setSettings] = useState(null);

  const getGeneralSettings = async () => {
    try {
      //   const res = await WorkService.getGeneralSettings();
      //   setSettings(res);
      //   setCommittedThemeKey(res.theme);
      //   setPreviewThemeKey(res.theme);
      const theme = localStorage.getItem("theme");
      setCommittedThemeKey(theme);
      setPreviewThemeKey(theme);
    } catch (err) {
      console.error("Error fetching general settings:", err);
    }
  };

  useEffect(() => {
    getGeneralSettings();
  }, []);

  const fullTheme = useMemo(() => {
    return {
      themeKey: previewThemeKey,
      customStyles: APP_THEMES[previewThemeKey],
    };
  }, [previewThemeKey]);

  const previewTheme = (key) => setPreviewThemeKey(key);

  const saveTheme = () => {
    localStorage.setItem("theme", previewThemeKey);
    setCommittedThemeKey(previewThemeKey);
  };

  const cancelTheme = () => setPreviewThemeKey(committedThemeKey);

  return (
    <CustomThemeContext.Provider
      value={{
        theme: fullTheme,
        previewTheme,
        saveTheme,
        cancelTheme,
        currentThemeKey: previewThemeKey,
        committedThemeKey,
        // settings,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(CustomThemeContext);
