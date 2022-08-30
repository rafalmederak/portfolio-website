import Header from "@components/header/Header";
import * as Styled from "./Projects.styles";
import Image from "next/image";
import Link from "next/link";
import { IPosts } from "./Projects.interfaces";

const Projects = ({ posts }: IPosts) => {
  return (
    <Styled.Container id="projects">
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
          {posts.map((post) => (
            <Styled.ProjectWrapper key={post.slug}>
              <Styled.ImageWrapper>
                <Image
                  src={post.cover.url}
                  layout="fill"
                  alt="portofolio-image"
                />
              </Styled.ImageWrapper>
              <Styled.ProjectsDescriptionWrapper>
                <h2>{post.title}</h2>
                <p>{post.shortDescription}</p>
                <Link href={"/projects/" + post.slug}>More information</Link>
              </Styled.ProjectsDescriptionWrapper>
            </Styled.ProjectWrapper>
          ))}
        </Styled.ProjectsContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Projects;
