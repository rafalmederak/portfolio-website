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
    <Styled.Container>
      <Styled.SectionWrapper>
        <Header title="About me" subtitle="Get to know me" />

        <Styled.DescriptionContainer>
          <Image src={PersonImage} alt="person-image" />

          <Styled.InformationsWrapper>
            <Styled.PersonDescriptionWrapper>
              <h4>Who am I</h4>
              <h3>I’m Rafał Męderak, Aspiring React Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis architecto nemo temporibus, doloremque magni harum
                dicta. Adipisci nobis placeat omnis delectus, distinctio quam
                cum dolore iure quisquam voluptate ducimus aliquam a minus!
                Veritatis dolor et facere est, praesentium odit cumque quae iure
                sequi perspiciatis ipsa molestiae, illum ab nesciunt natus
                itaque incidunt voluptatem. Magni molestias quas exercitationem
                quibusdam. Magni, sint?
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
