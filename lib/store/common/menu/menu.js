export const state = {
  entities: {},
  loaded: {},
  loading: {}
};
export const getters = {
  list(state) {
    return state.entities;
  },

  loading(state) {
    return state.loading;
  },

  loaded(state) {
    return state.loaded;
  }

};
export const mutations = {
  setEntities(state, {
    id,
    items
  }) {
    state.entities[id] = items;
  },

  addEntities(state, {
    id,
    items
  }) {
    state.entities[id] = [...state.entities[id], ...items];
  },

  setLoaded(state, {
    id,
    loaded
  }) {
    state.loaded[id] = loaded;
  },

  setLoading(state, {
    id,
    loading
  }) {
    state.loading[id] = loading;
  }

};