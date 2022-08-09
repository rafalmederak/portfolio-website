import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 3rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  ${({ theme }) => theme.screens.md} {
    padding: 6rem;
  }
  ${({ theme }) => theme.screens.xl} {
    padding: 6rem 10rem;
  }
  ${({ theme }) => theme.screens.xxl} {
    padding: 10rem 20rem 12rem 20rem;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 116rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
  img {
    width: 100%;
    max-width: 30rem !important;
    object-fit: cover;
  }
  ${({ theme }) => theme.screens.lg} {
    flex-direction: row;
    gap: 0 8rem;
    align-items: center;
    margin-top: 5.5rem;
    img {
      max-width: 36rem !important;
    }
  }
  ${({ theme }) => theme.screens.xl} {
    img {
      max-width: 40rem !important;
    }
  }
  ${({ theme }) => theme.screens.xxl} {
    img {
      max-width: 48rem !important;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  button {
    color: ${({ theme }) => theme.color.purple};
    background: none;
    border: 1px solid ${({ theme }) => theme.color.purple};
    padding: 0.4rem 1.2rem;
    margin-bottom: 3.5rem;
    border-radius: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
  }
  h4 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    color: ${({ theme }) => theme.color.purple};
    margin-top: 2rem;
  }
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.heading4};
    margin-top: 0.4rem;
  }
  p {
    margin: 2.8rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  ${({ theme }) => theme.screens.lg} {
    flex: 1;
    h4 {
      margin-top: 0;
    }
  }
  ${({ theme }) => theme.screens.xl} {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.heading3};
    }
  }
  ${({ theme }) => theme.screens.xxl} {
    p {
      max-width: 60rem;
    }
  }
`;
