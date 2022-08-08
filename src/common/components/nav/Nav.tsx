import Image from "next/image";
import React from "react";
import * as Styled from "./Nav.styles";
import PersonImage from "@content/images/person-image.png";
import { navLinks } from "./NavLinks";
import GitHubIcon from "@content/images/github-icon.svg";
import LinkedinIcon from "@content/images/linkedin-icon.svg";
import { INavProps } from "./Nav.interfaces";

const Nav = ({ activeNav, handleActiveNav }: INavProps) => {
  return (
    <Styled.Container activeNav={activeNav}>
      <Styled.CloseIcon fontSize="large" onClick={handleActiveNav} />
      <Styled.PersonWrapper>
        <Image src={PersonImage} width={100} height={100} alt="person image" />
        <h3>Rafał Męderak</h3>
        <p>rafal.mederak1@gmail.com</p>
      </Styled.PersonWrapper>

      <Styled.NavLinksContainer>
        {navLinks.map((Item) => (
          <Styled.NavLinkWrapper key={Item.id}>
            <Item.icon fontSize="large" />
            <p>{Item.text}</p>
          </Styled.NavLinkWrapper>
        ))}
      </Styled.NavLinksContainer>

      <Styled.SocialMediaContainer>
        <Styled.SocialMediaWrapper>
          <LinkedinIcon />
          <p>LinkedIn</p>
        </Styled.SocialMediaWrapper>
        <Styled.SocialMediaWrapper>
          <GitHubIcon />
          <p>GitHub</p>
        </Styled.SocialMediaWrapper>
      </Styled.SocialMediaContainer>
    </Styled.Container>
  );
};

export default Nav;
