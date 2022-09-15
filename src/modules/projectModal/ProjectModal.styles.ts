import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2.4rem 3rem 2.4rem;

  ${({ theme }) => theme.screens.md} {
    padding: 3rem 6rem 6rem 6rem;
  }
  ${({ theme }) => theme.screens.xl} {
    padding: 3rem 10rem 6rem 10rem;
  }
  ${({ theme }) => theme.screens.xxl} {
    padding: 6rem 20rem 12rem 20rem;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 116rem;
  gap: 6rem 0;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 26rem;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  img {
    object-fit: contain;
    width: 100%;
  }

  ${({ theme }) => theme.screens.md} {
    height: 42rem;
    max-width: 70rem;
  }

  ${({ theme }) => theme.screens.xl} {
    height: 52rem;
    max-width: 120rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  gap: 3rem 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.screens.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GalleryImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 22rem;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  img {
    object-fit: contain;
    width: 100%;
    aspect-ratio: 16/9;
  }

  ${({ theme }) => theme.screens.lg} {
    height: 32rem;
  }
`;

export const CloseIconContainer = styled.div`
  padding: 1.2rem 0.5rem 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;

  ${({ theme }) => theme.screens.md} {
    padding: 1.5rem 1.5rem 0 0;
  }
`;

export const CloseIcon = styled(HighlightOffIcon)`
  cursor: pointer;
  font-size: 28px;
`;
