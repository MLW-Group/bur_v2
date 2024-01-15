import styled from "styled-components";

export const ReceiveContainer = styled.div`
  width: 100%;
  background: white;
  height: 700px;
  display: flex;
  padding: 80px;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    gap: 100px;
  }
`;
export const BlockHalf = styled.div`
  width: 50%;
  height: 400px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;
export const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const BlockSub = styled.div`
  display: flex;
  justify-content: center;
`;
export const BlockQuality = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;
export const Quality = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  // max-width: 35%;
`;
export const ReceiveBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;
export const Receive1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: white;
  min-height: 200px;
  position: relative;
  width: 80%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.15));
  @media (max-width: 550px) {
    height: 300px;
    width: 100%;
  }
`;
export const BlockAbsolute = styled.div`
  position: absolute;
  top: -50px;
`;
export const Absolute = styled.div`
  position: absolute;
  bottom: -4px;
`;
