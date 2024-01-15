export const theme = {
  colors: {
    orange: "#FF5F1E",
    white: "#FFF",
    colorName1: "#aabbcc",
    background: "red",
    gray: "rgba(255, 255, 255, 0.60)",
    grayNumber: "rgba(255, 255, 255, 0.10)",
    grayBlack: "rgba(1, 2, 2, 0.60)",
    grayBlackNo: "rgba(1, 2, 2, 1)",
    black: "rgba(28, 14, 30, 0.69)",
    transparent: "transparent",
    whiteOp: "rgba(255, 255, 255, 0.3)",
    circleGray: "rgba(150, 150, 150, 0.3)",
    yellow: "#fbcf00",
    error: "red",
  },
  textSize: {
    "12": "12px",
    XS: "14px",
    S: "16px",
    M: "18px",
    L: "20px",
    XL: "22px",
    "24": "24px",
    XXL: "35px",
    medium: "65px",
    lg: "75px",
    "26": "26px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
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
      "10x6": "6px 10px",
      "10x60": "10px 80px",
      "10x120": "10px 150px",
      "17x52": "17px 52px",
      "21x45": "21px 45px",
      "28x50": "28px 50px",
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
  fontStyle: {
    normal: "normal",
    italic: "italic",
  },
  transform: {
    upper: "uppercase",
    lower: "lowercase",
  },
  flexDirection: {
    row: "row",
    reverse: "row-reverse",
    col: "column",
  },
  justifyContent: {
    center: "center",
    SA: "space-around",
    SB: "space-between",
    SE: "space-evenly",
    FE: "flex-end",
    FS: "flex-start",
  },
  blockSize: {
    XS: "30px",
    S: "50px",
    L: "100px",
  },
  gap: {
    XS: "5px",
    S: "10px",
    medium: "15px",
    M: "20px",
    L: "30px",
    XL: "40px",
    "100": "100px",
  },
  maxWidth: {
    "20%": "20%",
    "30%": "30%",
    "50%": "50%",
    "70%": "70%",
    "80%": "80%",
    "90%": "90%",
    "100%": "100%",
    "100px": "100px",
    "200px": "200px",
    "300px": "300px",
  },
  whiteSpace: {
    nowrap: "nowrap",
  },
  borderRadius: {
    "4px": "4px",
    "5px": "5px",
    "6px": "6px",
    "10px": "10px",
  },
  borderBottom: {
    "2pxGray": "2px solid gray",
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
export type BorderBottom = keyof (typeof theme)["borderBottom"];
export type MaxWidth = keyof (typeof theme)["maxWidth"];
export type FontStyle = keyof (typeof theme)["fontStyle"];
export type WhiteSpace = keyof (typeof theme)["whiteSpace"];
export type BorderRadius = keyof (typeof theme)["borderRadius"];
export default theme;
