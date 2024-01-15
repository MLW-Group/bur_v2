export const colorThemeNames = ["light", "dark"] as const;

export const defaultColorThemeName: (typeof colorThemeNames)[number] = "light";

export const colorThemeCookieName = "myAppColorTheme";
