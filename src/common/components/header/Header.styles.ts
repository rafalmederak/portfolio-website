import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    font-family: "Source Serif Pro", serif;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.heading2};
  }
  ${({ theme }) => theme.screens.xl} {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.heading1};
    }
  }
`;

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  border: 1px solid ${({ theme }) => theme.color.purple};
  padding: 1rem 1.2rem;
  margin-top: 1rem;
  p {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.purple};
  }
  ${({ theme }) => theme.screens.xl} {
    height: 3rem;
    p {
      font-size: 1.4rem;
    }
  }
`;
