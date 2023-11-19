import styled from "styled-components";

export const ModalContainer = styled.div`
  top: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  top: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
export const RowCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
export const ModalBody = styled.div`
  border-radius: 6px;
  max-width: 500px;
  margin-top: 60px;
  width: 100%;
  background: #fff;
  padding: 30px;
  z-index: 7;
`;
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Close = styled.p`
  width: 6px;
  height: 12px;
  color: #c4c4c4;
  cursor: pointer;
  font-family: cursive;
  font-weight: bold;
`;
export const BodyModal = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
`;
