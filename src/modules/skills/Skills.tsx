import Image from 'next/image';

import Header from '@components/header/Header';

import SkillsImage from '@content/images/skills-image.png';

import * as Styled from './Skills.styles';

const Skills = () => {
  return (
    <Styled.Container id="skills">
      <Styled.SectionWrapper>
        <Header title="My skills" subtitle="See how I work" />

        <Styled.DescriptionContainer>
          <Styled.DescriptionWrapper>
            <h4>How I work?</h4>
            <h3>Skills & Experience</h3>
            <p>
              Since I started creating websites, I’ve done a couple of websites
              for different companies. I had conversations with clients to
              ensure the best user experience.
              <br /> <br /> I create websites that are fast and responsive. My
              main area of work is the front-end. I create websites using{' '}
              <b>HTML, CSS, JavaScript</b>, or <b>TypeScript.</b> I also use{' '}
              <b>React</b>, <b>Redux</b> or <b>Next.js.</b> The CSS
              pre-processor that I use is <b>Sass</b> or I write CSS with{' '}
              <b>styled-components</b>.
            </p>
            <a href="/files/CV-Rafal_Mederak.pdf" download>
              Download my resume
            </a>
          </Styled.DescriptionWrapper>

          <Image src={SkillsImage} alt="person-image" />
        </Styled.DescriptionContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Skills;
