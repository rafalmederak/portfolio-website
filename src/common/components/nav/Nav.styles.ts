import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { INavProps } from "./Nav.interfaces";

export const Container = styled.nav`
  display: ${({ activeNav }: INavProps) => (activeNav ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 1;
  ${({ theme }) => theme.screens.lg} {
    width: 28rem;
    right: 0;
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
  ${({ theme }) => theme.screens.xl} {
    display: flex;
    position: sticky;
    top: 0;
    width: 32rem;
  }

  @media screen and (max-height: 860px) {
    justify-content: space-between;
  }

  @media screen and (max-height: 720px) {
    width: 34rem;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const PersonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 1rem;
    object-position: 50% 20%;
  }
  h3 {
    margin: 1.6rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.heading4};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  p {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  gap: 1.8rem;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  height: 3.4rem;
  /* background-color: ${({ theme }) => theme.color.gray100}; */
  border-radius: 1rem;
  cursor: pointer;
  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-left: 1rem;
  }
  svg {
    margin-left: 1rem;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.8rem;
  margin-top: 5.5rem;
  svg {
    cursor: pointer;
    width: 2.8rem;
  }
  ${({ theme }) => theme.screens.lg} {
    gap: 3.2rem;
    margin-top: 5.5rem;
    flex-direction: column;
    svg {
      margin-left: 1rem;
      width: 2.4rem;
    }
  }
  ${({ theme }) => theme.screens.xxl} {
    margin-top: 21rem;
  }

  @media screen and (max-height: 860px) {
    margin-top: 5.5rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  p {
    display: none;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-left: 1rem;
  }
  ${({ theme }) => theme.screens.lg} {
    width: 18rem;
    p {
      display: initial;
    }
  }
`;

export const CloseIcon = styled(HighlightOffIcon)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 28px;
  ${({ theme }) => theme.screens.xl} {
    display: none;
  }
`;