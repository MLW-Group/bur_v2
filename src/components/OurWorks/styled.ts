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

export const OurWorksContainer = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  // display: flex;
  // flex-wrap: wrap;
  // gap: 20px;
  padding: 50px;
  // justify-content: center;
`;
export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px;
  justify-content: center;
`;
