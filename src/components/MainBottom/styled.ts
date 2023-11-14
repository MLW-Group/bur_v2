import styled from "styled-components";

export const MainBottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  position: relative;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 28.65%);
  // background-size: 100% 100%;
`;
export const BlockNumberAbsolute = styled.div`
  position: absolute;
  left: 95px;
  top: -70px;
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
`;
