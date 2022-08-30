import React from "react";
import * as Styled from "./Hero.styles";
import HeroImage from "@content/images/hero-image.svg";

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
        <button>My projects</button>
      </Styled.Wrapper>
      <HeroImage />
    </Styled.Container>
  );
};

export default Hero;
