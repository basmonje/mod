import React from "react";

export const ThemeContext = React.createContext();

const COLORS = {
  light: {
    primary: "#dddddd",
    text: "#333",
    background: "#ffffff",
  },
  dark: {
    primary: "#333333",
    text: "#ddd",
    background: "#252525",
  },
};

export const DarkModeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(value) {
      const root = window.document.documentElement;

      localStorage.setItem("color-mode", value);

      root.style.setProperty(
        "--color-text",
        value === "light" ? COLORS.light.text : COLORS.dark.text
      );

      root.style.setProperty(
        "--color-background",
        value === "light" ? COLORS.light.background : COLORS.dark.background
      );

      root.style.setProperty(
        "--color-primary",
        value === "light" ? COLORS.light.primary : COLORS.dark.primary
      );
      rawSetColorMode(value);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  // const setColorMode = (value) => {
  //   const root = window.document.documentElement

  //   // 1. Updat React color-mode state
  //   rawSetColorMode(value)

  //   // 2. update Localstore
  //   localStorage.setItem("color-mode", value)

  //   // 3. Update each color
  //   root.style.setProperty(
  //     "--color-text",
  //     value === "light" ? COLORS.light.text : COLORS.dark.text
  //   )

  //   root.style.setProperty(
  //     "--color-background",
  //     value === "light" ? COLORS.light.background : COLORS.dark.background
  //   )

  //   root.style.setProperty(
  //     "--color-primary",
  //     value === "light" ? COLORS.light.primary : COLORS.dark.primary
  //   )
  // }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
