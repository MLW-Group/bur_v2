import styled from "styled-components";

export const OfferContainer = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url("/img/grid.png"), black 50% / cover no-repeat;
  gap: 50px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const BlockContent = styled.div`
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  width: 20%;
  margin: 10px;
  flex: 1;
  // background: red;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-height: 50%;
`;
export const BlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
