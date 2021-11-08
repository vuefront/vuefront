import { MutationTree, GetterTree } from "vuex";
import { RootState } from "vuefront-store";

export type State = {
  message: string;
  error: string;
};

export const state: State = {
  message: "",
  error: "",
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.message;
  },
  error(state) {
    return state.error;
  },
};

export const mutations: MutationTree<State> = {
  add(state, message) {
    state.message = message;
  },
  error(state, error) {
    state.error = error;
  },
};
