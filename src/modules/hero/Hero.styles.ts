import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 4rem;
  svg {
    object-fit: contain;
    margin-top: 7rem;
    width: 30rem;
  }

  ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    gap: 0 8rem;
    flex: 1;
    padding: 6rem;
    svg {
      margin-top: 0rem;
    }
  }

  ${({ theme }) => theme.screens.lg} {
    svg {
      width: 45rem;
      flex: 1.2;
    }
  }

  ${({ theme }) => theme.screens.xl} {
    padding: 6rem 10rem;
  }

  ${({ theme }) => theme.screens.xxl} {
    svg {
      width: 55rem;
      flex: initial;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Source Serif Pro", serif;
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  h3 {
    font-size: 2.2rem;
    margin: 1rem 0 2rem 0;
    color: ${({ theme }) => theme.color.purple};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  button {
    margin-top: 1.5rem;
    width: 15rem;
    height: 2.8rem;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray200};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  ${({ theme }) => theme.screens.lg} {
    flex: 1;
  }

  ${({ theme }) => theme.screens.xl} {
    flex: 1.2;
    h2 {
      font-size: 5.4rem;
    }
    h3 {
      font-size: 3rem;
    }
    button {
      font-size: 1.6rem;
      width: 18rem;
      height: 4.4rem;
    }
  }

  ${({ theme }) => theme.screens.xxl} {
    flex: initial;
    h2 {
      font-size: 6.4rem;
    }
    h3 {
      font-size: 4rem;
    }
    button {
      font-size: 2rem;
      width: 24rem;
      height: 4.4rem;
    }
  }
`;
