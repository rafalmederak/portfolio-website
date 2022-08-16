import React from "react";
import * as Styled from "./slug.styles";
import Header from "@components/header/Header";
import Image from "next/image";
import { hygraphClient } from "src/common/hygraph/client";
import { projectPostQuery, slugList } from "src/common/hygraph/queries";
import { IPost } from "@modules/projects/Projects.interfaces";
import { IParams, ISlugPost } from "./slug.interfaces";
import Layout from "@components/layout/Layout";

const ProjectPost = ({ post }: ISlugPost) => {
  return (
    <Layout>
      <Styled.Container>
        <Styled.SectionWrapper>
          <Header title={post.title} subtitle="Project" />
          <Styled.ImageWrapper>
            <Image priority src={post.cover.url} layout="fill" alt="image" />
          </Styled.ImageWrapper>
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
    </Layout>
  );
};

export default ProjectPost;

export async function getStaticPaths() {
  const { posts } = await hygraphClient.request(slugList);
  return {
    paths: posts.map((post: IPost) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: IParams) {
  const slug = params.slug;
  const data = await hygraphClient.request(projectPostQuery, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
