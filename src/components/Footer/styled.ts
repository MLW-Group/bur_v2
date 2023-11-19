import { FlexDirection, Gap, JustifyContent } from "@/styles/theme";
import styled from "styled-components";
export const FooterContainer = styled.div`
  padding: 40px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex: 1;
  & > :nth-child(1) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin-right: 10px;
  }
  & > :nth-child(2) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin-right: 10px;
  }
  & > :nth-child(3) {
    border-right: none;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
    & > :nth-child(1) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      border-right: 0px;
      margin-bottom: 10px;
    }
    & > :nth-child(2) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      border-right: 0px;
      margin-bottom: 10px;
    }
    & > :nth-child(3) {
      border-bottom: none;
    }
  }
`;
export const BlockInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    min-height: 250px;
`;
export const BlockInfoChildren = styled.div<{
  $alignItems?: JustifyContent;
  $gap?: Gap;
  $justifyContent?: JustifyContent;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: ${({ theme, $alignItems }) =>
    theme.justifyContent[$alignItems!]};
  justify-content: ${({ theme, $justifyContent }) =>
    theme.justifyContent[$justifyContent!]};
  gap: ${({ theme, $gap }) => theme.gap[$gap!]};
`;
export const BlockNew = styled.div<{
  $flexDirection?: FlexDirection;
}>`
  display: flex;
  flex-direction: ${({ theme, $flexDirection }) =>
    theme.flexDirection[$flexDirection!] || "row"};
  gap: 10px;
  height: 100%;
  // align-items: center;
`;
