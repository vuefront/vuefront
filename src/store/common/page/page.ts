import { MutationTree, GetterTree } from "vuex";
import { RootState } from "vuefront-store";
import { Page } from "vuefront-api";
export type State = {
  page: Page;
};

export const state: State = {
  page: {},
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.page;
  },
};

export const mutations: MutationTree<State> = {
  setPage(state, page) {
    state.page = page;
  },
};
