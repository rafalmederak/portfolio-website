import Header from "@components/header/Header";
import * as Styled from "./Projects.styles";
import HeroImage from "@content/images/person-image.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <Styled.Container>
      <Styled.SectionWrapper>
        <Header title="My projects" subtitle="The results of my work" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet
          omnis repudiandae repellendus voluptates unde! Voluptatem repudiandae
          quia, placeat repellat nobis alias. Quis odit deleniti impedit ut
          nobis eius veniam sequi eveniet voluptatem obcaecati, fuga est
          suscipit quas eaque itaque nam magni quia. Culpa quas hic praesentium
          fugiat deleniti voluptatibus?
        </p>

        <Styled.ProjectsContainer>
          <Styled.ProjectWrapper>
            <Styled.ImageWrapper>
              <Image src={HeroImage} layout="fill" alt="portofolio-image" />
            </Styled.ImageWrapper>
            <Styled.ProjectsDescriptionWrapper>
              <h2>Portfolio website</h2>
              <p>
                A portfolio website that provides professional information about
                an individual or a company and presents a showcase of their
                work.
              </p>
              <Link href={""}>More information</Link>
            </Styled.ProjectsDescriptionWrapper>
          </Styled.ProjectWrapper>
        </Styled.ProjectsContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Projects;
