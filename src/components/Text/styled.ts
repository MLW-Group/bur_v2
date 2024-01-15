import theme, {
  FontFamily,
  FontStyle,
  FontWeight,
  JustifyContent,
  MarginSize,
  MaxWidth,
  MixSize,
  TextSize,
  ThemeColors,
  Transform,
  WhiteSpace,
} from "@/styles/theme";
import styled from "styled-components";

export const Text = styled.p<{
  $size: TextSize;
  $marginLeft?: MarginSize;
  $marginRight?: MarginSize;
  $mix?: MixSize;
  $margin?: MarginSize;
  $color?: ThemeColors;
  $fontWeight?: FontWeight;
  $fontFamily?: FontFamily;
  $transform?: Transform;
  $lineHeight?: TextSize;
  $textAlign?: JustifyContent;
  $textFill?: ThemeColors;
  $textStroke?: ThemeColors;
  $maxWidth?: MaxWidth;
  $fontStyle?: FontStyle;
  $whiteSpace?: WhiteSpace;
}>`
  text-align: ${({ theme, $textAlign }) => theme.justifyContent[$textAlign!]};
  font-style: ${({ theme, $fontStyle }) =>
    theme.fontStyle[$fontStyle!] || "normal"};
  color: ${({ theme, $color }) => theme.colors[$color!]};
  font-size: ${({ theme, $size }) => theme.textSize[$size]};
  line-height: ${({ theme, $lineHeight }) =>
    theme.textSize[$lineHeight!] || "100%"};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin-right: ${({ theme, $marginRight }) => theme.margin[$marginRight!]};
  margin: ${({ theme, $mix, $margin }) =>
    theme.margin[$margin!] || theme.margin.mix[$mix!]};
  font-weight: ${({ theme, $fontWeight }) => theme.fontWeight[$fontWeight!]};
  font-family: ${({ theme, $fontFamily }) =>
    theme.fontFamily[$fontFamily!] || "Oswald"};
  text-transform: ${({ theme, $transform }) => theme.transform[$transform!]};
  max-width: ${({ theme, $maxWidth }) => theme.maxWidth[$maxWidth!]};
  white-space: ${({ theme, $whiteSpace }) => theme.whiteSpace[$whiteSpace!]};
  -webkit-text-fill-color: ${({ theme, $textFill }) =>
    theme.colors[$textFill!]};
  -webkit-text-stroke: ${({ theme, $textStroke }) =>
    $textStroke && theme.colors[$textStroke!] + ` 2px`};
`;
