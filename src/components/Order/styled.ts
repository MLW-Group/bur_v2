import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 80px;
  gap: 70px;
  background-image: url("/img/orderBack.png");
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  flex-direction: column;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;
export const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const BlockGlassContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 44px;
  width: 60%;
  text-align: center;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7.5px);
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
