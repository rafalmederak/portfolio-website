import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  main {
    width: 100%;
  }
  ${({ theme }) => theme.screens.xl} {
    flex-direction: row;
  }
`;
