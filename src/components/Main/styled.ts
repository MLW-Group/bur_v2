import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const BlockTitle = styled.div`
  display: flex;
  width: 60%;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const BlockBot = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 30px;
  align-items: flex-end;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
`;
export const BlockCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin-top: 30px;
  flex-direction: column;
`;

export const BlockBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  gap: 50px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 650px) {
    gap: 20px;
    flex-direction: column;
  }
`;
export const BlockRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    width: 90%;
    padding-bottom: 40px;
  }
`;
export const BlockAbsolute = styled.div`
  position: absolute;
  bottom: -50px;
`;
