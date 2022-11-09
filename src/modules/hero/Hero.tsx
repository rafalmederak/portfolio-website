import React from "react";
import * as Styled from "./Hero.styles";
import HeroImage from "@content/images/hero-image.svg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Styled.Container id="home">
      <Styled.Wrapper>
        <h2>
          Hi,
          <br />
          I&apos;m Rafał
        </h2>
        <h3>Aspiring React Developer</h3>
        <Link
          to="projects"
          href="projects"
          smooth={true}
          spy={true}
          duration={500}
        >
          My projects <p>{"->"}</p>
        </Link>
      </Styled.Wrapper>
      <HeroImage />
    </Styled.Container>
  );
};

export default Hero;
