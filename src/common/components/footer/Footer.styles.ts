import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  height: 12rem;

  ${({ theme }) => theme.screens.md} {
    padding: 0rem 6rem;
  }
  ${({ theme }) => theme.screens.xl} {
    padding: 0rem 10rem;
  }
  ${({ theme }) => theme.screens.xxl} {
    padding: 0 20rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 116rem;
  width: 100%;
  p {
    color: ${({ theme }) => theme.color.purple};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  span {
    color: ${({ theme }) => theme.color.gray800};
  }

  ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    align-items: center;
  }
`;
