import Vue from "vue";
export const state = () => ({
  entities: {},
  loaded: {},
  loading: {}
});
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
    Vue.set(state.entities, id, items);
  },

  addEntities(state, {
    id,
    items
  }) {
    Vue.set(state.entities, id, [...state.entities[id], ...items]);
  },

  setLoaded(state, {
    id,
    loaded
  }) {
    Vue.set(state.loaded, id, loaded);
  },

  setLoading(state, {
    id,
    loading
  }) {
    Vue.set(state.loading, id, loading);
  }

};