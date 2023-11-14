import theme, {
  FontFamily,
  FontWeight,
  JustifyContent,
  MarginSize,
  MixSize,
  TextSize,
  ThemeColors,
  Transform,
} from "@/styles/theme";
import styled from "styled-components";

export const Text = styled.p<{
  $size: TextSize;
  $marginLeft?: MarginSize;
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
}>`
  text-align: ${({ theme, $textAlign }) => theme.justifyContent[$textAlign!]};
  color: ${({ theme, $color }) => theme.colors[$color!]};
  font-size: ${({ theme, $size }) => theme.textSize[$size]};
  line-height: ${({ theme, $lineHeight }) => theme.textSize[$lineHeight!]};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin: ${({ theme, $mix, $margin }) =>
    theme.margin[$margin!] || theme.margin.mix[$mix!]};
  font-weight: ${({ theme, $fontWeight }) => theme.fontWeight[$fontWeight!]};
  font-family: ${({ theme, $fontFamily }) =>
    theme.fontFamily[$fontFamily!] || "var(--oswald)"};
  text-transform: ${({ theme, $transform }) => theme.transform[$transform!]};
  -webkit-text-fill-color: ${({ theme, $textFill }) =>
    theme.colors[$textFill!]};
  -webkit-text-stroke: ${({ theme, $textStroke }) =>
    $textStroke && theme.colors[$textStroke!] + ` 1px`};
`;
