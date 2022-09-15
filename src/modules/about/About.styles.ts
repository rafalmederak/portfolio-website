import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};

  ${({ theme }) => theme.screens.md} {
    padding: 6rem;
  }

  ${({ theme }) => theme.screens.xl} {
    padding: 6rem 10rem;

    ${({ theme }) => theme.screens.xxl} {
      padding: 10rem 20rem 12rem 20rem;
    }
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
  margin-top: 5.5rem;
  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 22rem !important;
    height: 30rem !important;
  }

  ${({ theme }) => theme.screens.lg} {
    flex-direction: row;
    gap: 0 8rem;
    align-items: center;
    img {
      width: 28rem !important;
      height: 40rem !important;
    }
  }

  ${({ theme }) => theme.screens.xxl} {
    margin-top: 9.5rem;
    img {
      width: 32rem !important;
      height: 44rem !important;
    }
  }
`;

export const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.screens.lg} {
    flex: 1;
  }
`;

export const PersonDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding-bottom: 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray200};
  }

  ${({ theme }) => theme.screens.lg} {
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
    max-width: 76rem;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 2rem 0;

  ${({ theme }) => theme.screens.lg} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactInfoBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
