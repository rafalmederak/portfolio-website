import { GraphQLClient } from "graphql-request";

export const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
);
