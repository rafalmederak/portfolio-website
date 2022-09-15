import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { INavProps } from "./Nav.interfaces";
import { Link } from "react-scroll";

export const Container = styled.nav`
  opacity: ${({ activeNav }: INavProps) => (activeNav ? "1" : "0")};
  transform: ${({ activeNav }: INavProps) =>
    activeNav ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.4s ease;
  display: flex;
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
    transition: none;
    position: sticky;
    opacity: 1;
    transform: none;
    top: 0;
  }

  @media screen and (max-height: 760px) and (min-width: 768px) {
    justify-content: space-between;
  }

  @media screen and (max-height: 680px) {
    gap: 5rem 0;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media screen and (max-height: 680px) and (max-width: 1279px) {
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    padding: 2rem 4rem;
  }

  @media screen and (max-height: 680px) and (max-width: 550px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 10rem !important;
    height: 10rem !important;
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

  .active-nav {
    transition: background-color 0.3s ease;
    background-color: ${({ theme }) => theme.color.gray100};
  }

  @media screen and (max-height: 680px) {
    margin-top: 0;
  }
`;

export const NavLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  width: 18rem;
  height: 3.4rem;
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

  ${({ theme }) => theme.screens.xxl + "and (min-height: 900px)"} {
    margin-top: 21rem;
  }

  @media screen and (max-height: 680px) {
    margin-top: 0;
  }
`;

export const SocialMediaWrapper = styled.div`
  cursor: pointer;
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
