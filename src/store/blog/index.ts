import { State as CategoryState } from "./category/category";
import { State as PostState } from "./post/post";
export type BlogState = {
  category: CategoryState;
  post: PostState;
};
