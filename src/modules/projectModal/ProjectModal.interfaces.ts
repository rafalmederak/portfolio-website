import { IPost } from "@modules/projects/Projects.interfaces";

export interface IProjectModalPost extends IPost {
  handleClose: () => void;
}
