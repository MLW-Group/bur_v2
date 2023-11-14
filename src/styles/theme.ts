export const theme = {
  colors: {
    orange: "#FF5F1E",
    white: "#FFF",
    colorName1: "#aabbcc",
    background: "red",
    gray: "rgba(255, 255, 255, 0.60)",
    grayNumber: "rgba(255, 255, 255, 0.10)",
    grayBlack: "rgba(1, 2, 2, 0.60)",
    black: "rgba(28, 14, 30, 0.69)",
    transparent: "transparent",
    whiteOp: "rgba(255, 255, 255, 0.3)",
  },
  textSize: {
    "12": "12px",
    XS: "14px",
    S: "16px",
    M: "18px",
    L: "20px",
    XL: "22px",
    XXL: "35px",
    medium: "65px",
    lg: "75px",
    "40": "40px",
    "70": "70px",
    "80": "80px",
    "120": "120px",
    "200": "200px",
    biggest: "130px",
  },
  text: {
    caption: {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "0",
      letterSpacing: "0",
    },
  },
  margin: {
    l: "10px",
    "50": "50px",
    mix: {
      "0x10": "0 10px",
      "10x0": "10px 0",
      "10x4": "4px 10px",
      "17x52": "17px 52px",
      "21x45": "21px 45px",
    },
  },
  fontWeight: {
    small: "200",
    S: "300",
    M: "400",
    L: "500",
    XL: "600",
    XXL: "700",
  },
  fontFamily: {
    oswald: "Oswald",
    open: "Open Sans",
  },
  transform: {
    upper: "uppercase",
    lower: "lowercase",
  },
  flexDirection: {
    row: "row",
    col: "column",
  },
  justifyContent: {
    center: "center",
    SA: "space-around",
    SB: "space-between",
    SE: "space-evenly",
    FE: "flex-end",
  },
  blockSize: {
    S: "50px",
    L: "100px",
  },
  gap: {
    S: "10px",
    medium: "15px",
    M: "20px",
    L: "30px",
    XL: "40px",
  },
} as const;

export type ThemeColors = keyof (typeof theme)["colors"];
export type TextSize = keyof (typeof theme)["textSize"];
export type Gap = keyof (typeof theme)["gap"];
export type BlockSize = keyof (typeof theme)["blockSize"];
export type FlexDirection = keyof (typeof theme)["flexDirection"];
export type MarginSize = Exclude<keyof (typeof theme)["margin"], "mix">;
export type MixSize = keyof (typeof theme)["margin"]["mix"];
export type FontWeight = keyof (typeof theme)["fontWeight"];
export type FontFamily = keyof (typeof theme)["fontFamily"];
export type Transform = keyof (typeof theme)["transform"];
export type JustifyContent = keyof (typeof theme)["justifyContent"];

export default theme;
