import theme, {
  FontFamily,
  FontWeight,
  TextSize,
  Transform,
  JustifyContent,
  MarginSize,
  MixSize,
  ThemeColors,
} from "@/styles/theme";
import styled from "styled-components";

export const Button = styled.button<{
  $background?: ThemeColors;
  children?: string;
  $padding?: MarginSize;
  $mix: MixSize;
  $size: TextSize;
  $marginLeft?: MarginSize;
  $margin?: MarginSize;
  $color?: ThemeColors;
  $fontWeight?: FontWeight;
  $fontFamily?: FontFamily;
  $transform?: Transform;
  $lineHeight?: TextSize;
  $textAlign?: JustifyContent;
}>`
  display: flex;
  border: none;
  outline: none;
  border-radius: 250px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme, $background }) => theme.colors[$background!]};
  padding: ${({ theme, $mix, $padding }) =>
    theme.margin[$padding!] || theme.margin.mix[$mix!]};
  text-align: ${({ theme, $textAlign }) => theme.justifyContent[$textAlign!]};
  color: ${({ theme, $color }) => theme.colors[$color!]};
  font-size: ${({ theme, $size }) => theme.textSize[$size]};
  line-height: ${({ theme, $lineHeight }) => theme.textSize[$lineHeight!]};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin: ${({ theme, $mix, $margin }) =>
    theme.margin[$margin!] || theme.margin.mix[$mix!]};
  font-weight: ${({ theme, $fontWeight }) => theme.fontWeight[$fontWeight!]};
  font-family: ${({ theme, $fontFamily }) =>
    theme.fontFamily[$fontFamily!] || "Oswald"};
  text-transform: ${({ theme, $transform }) => theme.transform[$transform!]};
`;
