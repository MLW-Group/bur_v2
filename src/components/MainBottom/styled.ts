import styled from "styled-components";

export const MainBottomContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1500px) {
    height: 800px;
  }
`;
export const BlockNumberAbsolute = styled.div`
  position: absolute;
  left: 95px;
  top: -50px;
  margin-left: auto;
  margin-right: auto;
`;
export const BlockNumber = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 300px;
`;
export const BlockLine = styled.div`
  width: 350px;
  height: 15px;
  background: white;
  position: absolute;
  bottom: 0;
  @media (max-width: 1500px) {
    display: none;
  }
`;
