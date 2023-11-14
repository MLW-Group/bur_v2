import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const BlockTitle = styled.div`
  display: flex;
  width: 60%;
`;
export const BlockBot = styled.div`
  display: flex;
  width: 80%;
  align-items: flex-end;
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
  height: 130px;
  margin-top: 30px;
  gap: 50px;
`;
export const BlockRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const BlockAbsolute = styled.div`
  position: absolute;
  bottom: -50px;
`;
