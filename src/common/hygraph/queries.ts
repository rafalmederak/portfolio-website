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
