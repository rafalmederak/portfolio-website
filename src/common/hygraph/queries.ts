import { gql } from "graphql-request";

export const postsQuery = gql`
  {
    posts {
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
      shortDescription
    }
  }
`;
