import React from "react";
import * as Styled from "./About.styles";
import Image from "next/image";
import PersonImage from "@content/images/person-image.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "@components/header/Header";

const About = () => {
  return (
    <Styled.Container id="about">
      <Styled.SectionWrapper>
        <Header title="About me" subtitle="Get to know me" />

        <Styled.DescriptionContainer>
          <Image src={PersonImage} alt="person-image" />

          <Styled.InformationsWrapper>
            <Styled.PersonDescriptionWrapper>
              <h4>Who am I</h4>
              <h3>I’m Rafał Męderak, Aspiring React Developer</h3>
              <p>
                I am a website freelancer from Poland, and I study at the Higher
                School of Economy and IT in Cracow. I have been creating
                websites as a freelance web developer for the last three years,
                trying to get better and better. Now, I am looking for my first
                full-time job. I like solving problems and making things
                perfect. I also learn new things quickly. I can provide a great
                approach to every project. I like learning things from more
                advanced people. This is an opportunity to get experience and
                work with professionals. I am always open to new challenges and
                constructive feedback. I want to be a team player and give my
                skills to help the team and create the best, unique products.
              </p>
            </Styled.PersonDescriptionWrapper>

            <Styled.ContactInfoWrapper>
              <Styled.ContactInfoBox>
                <AccountCircleIcon fontSize="large" />
                <p>Rafał Męderak</p>
              </Styled.ContactInfoBox>

              <Styled.ContactInfoBox>
                <MailOutlineIcon fontSize="large" />
                <p>rafal.mederak1@gmail.com</p>
              </Styled.ContactInfoBox>

              <Styled.ContactInfoBox>
                <LocationOnIcon fontSize="large" />
                <p>Cracow, Poland</p>
              </Styled.ContactInfoBox>

              <Styled.ContactInfoBox>
                <PhoneIcon fontSize="large" />
                <p>508 773 553</p>
              </Styled.ContactInfoBox>
            </Styled.ContactInfoWrapper>
          </Styled.InformationsWrapper>
        </Styled.DescriptionContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default About;
