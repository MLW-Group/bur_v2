import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  background: white;
  padding: 70px;
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const BlockHalf = styled.div`
  height: 100%;
  width: 50%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
export const BlockCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BlockUnderSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 37px;
  margin-top: 20px;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const BlockCenterRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;
export const BlockCenterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: center;
    gap: 20px;
  }
`;
export const BlockBot = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
