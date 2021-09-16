import { BlogState } from "../src/store/blog";
import { CommonState, CommonRootState } from "../src/store/common";
import { MenuState } from "../src/store/menu";
import { StoreState } from "../src/store/store";
export type RootState = {
  blog: BlogState;
  common: CommonState;
  menu: MenuState;
  store: StoreState;
} & CommonRootState;
