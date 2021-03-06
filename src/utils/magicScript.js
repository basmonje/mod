const COLORS = {
  light: {
    primary: "#dddddd",
    text: "#333",
    background: "#ffffff",
  },
  dark: {
    primary: "#333333",
    text: "#ddd",
    background: "#12141d",
  },
};

export const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem("color-mode")
      const hasPersistedPreference = typeof persistedColorPreference === "string"

      // If the user has explicitly chosen light or dark
      // let's use it. Otherwise, this value will be null.

      if (hasPersistedPreference) {
        return persistedColorPreference
      }

      // If they haven't been explicit, let's check the media query
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const hasMediaQueryPreference = typeof mql.matches === "boolean"

      if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light"
      }

      // If they are using a browser/OS that doesn't support
      // color themer, let's default to 'light'
      return "light"
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.light.text}'
        : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${COLORS.light.background}'
        : '${COLORS.dark.background}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${COLORS.light.primary}'
        : '${COLORS.dark.primary}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
