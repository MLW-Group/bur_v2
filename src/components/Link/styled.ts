import theme, {
  FontFamily,
  FontWeight,
  MarginSize,
  MixSize,
  TextSize,
  ThemeColors,
  Transform,
} from "@/styles/theme";
import styled from "styled-components";

export const Link = styled.a<{
  $size: TextSize;
  $marginLeft?: MarginSize;
  $mix?: MixSize;
  $margin?: MarginSize;
  $color?: ThemeColors;
  $fontWeight?: FontWeight;
  $fontFamily?: FontFamily;
  $transform?: Transform;
}>`
  color: ${({ theme, $color }) => theme.colors[$color!]};
  font-size: ${({ theme, $size }) => theme.textSize[$size]};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin: ${({ theme, $mix, $margin }) =>
    theme.margin[$margin!] || theme.margin.mix[$mix!]};
  font-weight: ${({ theme, $fontWeight }) => theme.fontWeight[$fontWeight!]};
  font-family: ${({ theme, $fontFamily }) => theme.fontFamily[$fontFamily!]};
  text-transform: ${({ theme, $transform }) => theme.transform[$transform!]};
  cursor: pointer;
`;
