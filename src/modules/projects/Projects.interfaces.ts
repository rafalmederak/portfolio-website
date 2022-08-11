export interface IPost {
  title: string;
  slug: string;
  cover: {
    url: string;
  };
  shortDescription: string;
  content: {
    html: string;
  };
  date: string;
  gallery: {
    url: string;
  };
}

export interface IPosts {
  posts: IPost[];
}
