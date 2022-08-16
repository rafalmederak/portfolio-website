import { IPost } from "@modules/projects/Projects.interfaces";

export interface IParams {
  params: {
    slug: string;
  };
}

export interface ISlugPost {
  post: IPost;
}
