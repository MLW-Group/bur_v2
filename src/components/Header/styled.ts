import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 35px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(242, 242, 242, 0.16);
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
`;
