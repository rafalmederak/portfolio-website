import { gql } from "graphql-request";

export const pageQuery = gql`
  {
    posts {
      title
      slug
      cover {
        url
      }
      shortDescription
    }
  }
`;

export const projectPostQuery = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      cover {
        url
      }
      content {
        html
      }
      date
      gallery {
        url
      }
    }
  }
`;

export const slugList = gql`
  {
    posts {
      slug
    }
  }
`;
