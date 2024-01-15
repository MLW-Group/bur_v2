import {
  BorderBottom,
  FlexDirection,
  Gap,
  JustifyContent,
  MarginSize,
  MaxWidth,
  MixSize,
} from "@/styles/theme";
import styled from "styled-components";

export const InCostContainer = styled.div`
  width: 100%;
  // height: 800px;
  background: repeating-linear-gradient(
    313deg,
    #2b2b2b,
    #2b2b2b 500px,
    #ff5f1e 500px,
    #ff5f1e 800px
  );
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
`;
export const BlockNumber = styled.div<{
  $justifyContent?: JustifyContent;
  $alignItems?: JustifyContent;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ theme, $alignItems }) =>
    theme.justifyContent[$alignItems!]};
  padding: 20px 20px 25px 20px;
`;
export const BlockContainer = styled.div<{
  $flexDirection?: FlexDirection;
  $marginLeft?: MarginSize;
  $justifyContent?: JustifyContent;
  $marginRight?: MarginSize;
  $marginTop?: MarginSize;
  $mix?: MixSize;
  $margin?: MarginSize;
  $gap?: Gap;
  $height?: MaxWidth;
  $width?: MaxWidth;
  $alignItems?: JustifyContent;
  $borderBottom?: BorderBottom;
}>`
  display: flex;
  justify-content: ${({ theme, $justifyContent }) =>
    theme.justifyContent[$justifyContent!]};
  height: ${({ theme, $height }) => theme.maxWidth[$height!]};
  width: ${({ theme, $width }) => theme.maxWidth[$width!]};
  align-items: ${({ theme, $alignItems }) =>
    theme.justifyContent[$alignItems!]};
  flex-direction: ${({ theme, $flexDirection }) =>
    theme.flexDirection[$flexDirection!] || "row"};
  margin-left: ${({ theme, $marginLeft }) => theme.margin[$marginLeft!]};
  margin-top: ${({ theme, $marginTop }) => theme.margin[$marginTop!]};
  margin-right: ${({ theme, $marginRight }) => theme.margin[$marginRight!]};
  gap: ${({ theme, $gap }) => theme.gap[$gap!]};
  border-bottom: ${({ theme, $borderBottom }) =>
    theme.borderBottom[$borderBottom!]};
  // border-bottom: 2px solid gray;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
