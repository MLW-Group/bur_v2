import theme, { BlockSize, ThemeColors } from "@/styles/theme";
import styled from "styled-components";

export const Circle = styled.div<{
  $width?: BlockSize;
  $height?: BlockSize;
  $children?: any;
  $background?: ThemeColors;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2500px;
  width: ${({ theme, $width }) => theme.blockSize[$width!]};
  height: ${({ theme, $height }) => theme.blockSize[$height!]};
  background-color: ${({ theme, $background }) => theme.colors[$background!]};
`;
