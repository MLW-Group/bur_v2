import styled from "styled-components";

export const UnderHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 35px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1350px) {
    // & > :nth-child(2) {
    //   display: none !important;
    // }
  }
  @media (max-width: 620px) {
    flex-direction: column;
    gap: 30px;
    & > :nth-child(1) {
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
