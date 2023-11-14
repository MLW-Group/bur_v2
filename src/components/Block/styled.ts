import theme, {
  BlockSize,
  FlexDirection,
  Gap,
  JustifyContent,
  MarginSize,
  MixSize,
} from "@/styles/theme";
import styled from "styled-components";

export const Block = styled.div<{
  $flexDirection?: FlexDirection;
  $marginLeft?: MarginSize;
  $justifyContent?: JustifyContent;
  $marginRight?: MarginSize;
  $marginTop?: MarginSize;
  $mix?: MixSize;
  $margin?: MarginSize;
  $gap?: Gap;
}>`
  display: flex;
  justify-content: ${({ theme, $justifyContent }) =>
    theme.justifyContent[$justifyContent!]};
  align-items: center;
  flex-direction: ${({ theme, $flexDirection }) =>
    theme.flexDirection[$flexDirection!] || "row"};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin-top: ${({ theme, $marginTop }) => theme.margin[$marginTop!]};
  margin-right: ${({ theme, $marginRight }) => theme.margin[$marginRight!]};
  gap: ${({ theme, $gap }) => theme.gap[$gap!]};
  height: 100%;
  margin: ${({ theme, $mix, $margin }) =>
    theme.margin[$margin!] || theme.margin.mix[$mix!]};
`;
