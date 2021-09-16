import { MutationTree, GetterTree } from "vuex";
import { RootState } from "vuefront-store";
export interface IMenuLink {
  title: string;
  to: string;
  children: IMenuLink[];
}
export type State = {
  entities: {
    [key: string]: {
      id: string;
      items: IMenuLink[];
    };
  };
  loaded: {
    [key: string]: {
      id: string;
      loaded: boolean;
    };
  };
  loading: {
    [key: string]: {
      id: string;
      loading: boolean;
    };
  };
};

export const state: State = {
  entities: {},
  loaded: {},
  loading: {},
};

export const getters: GetterTree<State, RootState> = {
  list(state) {
    return state.entities;
  },
  loading(state) {
    return state.loading;
  },
  loaded(state) {
    return state.loaded;
  },
};

export const mutations: MutationTree<State> = {
  setEntities(state, { id, items }) {
    state.entities[id] = items;
  },
  addEntities(state, { id, items }: { id: string; items: IMenuLink[] }) {
    state.entities[id].items = [...state.entities[id].items, ...items];
  },
  setLoaded(state, { id, loaded }) {
    state.loaded[id] = loaded;
  },
  setLoading(state, { id, loading }) {
    state.loading[id] = loading;
  },
};
