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
  setEntities(state, _ref) {
    let {
      id,
      items
    } = _ref;
    state.entities[id] = items;
  },

  addEntities(state, _ref2) {
    let {
      id,
      items
    } = _ref2;
    state.entities[id].items = [...state.entities[id].items, ...items];
  },

  setLoaded(state, _ref3) {
    let {
      id,
      loaded
    } = _ref3;
    state.loaded[id] = loaded;
  },

  setLoading(state, _ref4) {
    let {
      id,
      loading
    } = _ref4;
    state.loading[id] = loading;
  }

};
//# sourceMappingURL=menu.mjs.map