import Header from "@components/header/Header";
import * as Styled from "./Skills.styles";
import SkillsImage from "@content/images/skills-image.png";
import Image from "next/image";

const Skills = () => {
  return (
    <Styled.Container>
      <Styled.SectionWrapper>
        <Header title="My skills" subtitle="See how I work" />

        <Styled.DescriptionContainer>
          <Styled.DescriptionWrapper>
            <h4>How I work?</h4>
            <h3>Skills & Experience</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati nobis saepe officia voluptates tempora officiis possimus
              aliquam asperiores perferendis distinctio voluptatem blanditiis
              nam nostrum culpa, libero at optio commodi alias iusto
              perspiciatis quod et iure. Quidem exercitationem placeat id
              doloremque fuga laborum non debitis impedit neque, deleniti
              eveniet quia quos eum repellendus dolorum nesciunt commodi,
              distinctio ad sapiente quo facere, rerum ipsa tempora. Voluptatem
              nesciunt ut laboriosam nulla deleniti voluptatum dicta, voluptates
              qui labore, eligendi, sed itaque. Rerum blanditiis exercitationem
              quam. Minima, voluptas consequuntur! Omnis vel cupiditate
              laboriosam fugit ea!
            </p>
            <button>Download my resume</button>
          </Styled.DescriptionWrapper>

          <Image src={SkillsImage} alt="person-image" />
        </Styled.DescriptionContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Skills;
