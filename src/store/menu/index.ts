import { State as BlogState } from "./blog/blog";
import { State as PageState } from "./page/page";
import { State as StoreState } from "./store/store";
export type MenuState = {
  blog: BlogState;
  page: PageState;
  store: StoreState;
};
