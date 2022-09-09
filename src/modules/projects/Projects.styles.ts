import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
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
  gap: 6rem 0;
  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  ${({ theme }) => theme.screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.screens.xxl} {
    grid-gap: 6rem;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 41rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  img {
    object-fit: cover;
  }
  ${({ theme }) => theme.screens.md} {
    height: 45rem;
  }
  ${({ theme }) => theme.screens.xl} {
    height: 44rem;
  }
  ${({ theme }) => theme.screens.xxl} {
    height: 48rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 20rem;
`;

export const ProjectsDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  gap: 2.6rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.heading4};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  p {
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  button {
    color: ${({ theme }) => theme.color.purple};
    background: none;
    border: 1px solid ${({ theme }) => theme.color.purple};
    padding: 0.4rem 1.2rem;
    border-radius: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    transition: all 0.3s ease-out;

    :hover {
      background: ${({ theme }) => theme.color.purple};
      color: ${({ theme }) => theme.color.white};
      transform: translateY(-0.5rem);
    }
  }
  ${({ theme }) => theme.screens.xxl} {
    a {
      font-size: ${({ theme }) => theme.fontSize.paragraph};
    }
    h2 {
      font-size: ${({ theme }) => theme.fontSize.heading3};
    }
  }
`;

export const Dialog = styled.div``;
