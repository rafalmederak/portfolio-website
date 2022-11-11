import Image from 'next/image';

import Header from '@components/header/Header';

import { IProjectModalPost } from './ProjectModal.interfaces';
import * as Styled from './ProjectModal.styles';

const ProjectModal = ({ handleClose, ...post }: IProjectModalPost) => {
  return (
    <>
      <Styled.CloseIconContainer>
        <Styled.CloseIcon fontSize="large" onClick={handleClose} />
      </Styled.CloseIconContainer>
      <Styled.Container key={post.slug}>
        <Styled.SectionWrapper>
          <Header title={post.title} subtitle="Project" />
          <Styled.ContentWrapper
            dangerouslySetInnerHTML={{ __html: post.content?.html }}
          ></Styled.ContentWrapper>
          <Styled.GalleryContainer>
            {post.gallery.map((post) => (
              <Styled.GalleryImageWrapper key={post.url}>
                <Image priority src={post.url} alt="image" layout="fill" />
              </Styled.GalleryImageWrapper>
            ))}
          </Styled.GalleryContainer>
        </Styled.SectionWrapper>
      </Styled.Container>
    </>
  );
};

export default ProjectModal;
