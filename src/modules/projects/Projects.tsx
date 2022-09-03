import Header from "@components/header/Header";
import * as Styled from "./Projects.styles";
import Image from "next/image";
import { IPost, IPosts } from "./Projects.interfaces";
import { useEffect, useRef, useState } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import ProjectModal from "@modules/projectModal/ProjectModal";

const Projects = ({ posts }: IPosts) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [popupContent, setPopupContent] = useState<[IPost] | []>([]);

  const changeContent = (post: IPost) => {
    setPopupContent([post]);
  };

  const handleClickOpen =
    (scrollType: DialogProps["scroll"], post: IPost) => () => {
      setOpen(true);
      setScroll(scrollType);
      changeContent(post);
    };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
                <button onClick={handleClickOpen("paper", post)}>
                  More information
                </button>
              </Styled.ProjectsDescriptionWrapper>
            </Styled.ProjectWrapper>
          ))}

          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            {popupContent.map((post) => (
              <ProjectModal
                key={post.slug}
                {...post}
                handleClose={handleClose}
              />
            ))}
          </Dialog>
        </Styled.ProjectsContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Projects;
