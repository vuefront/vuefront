import { isUndefined } from "lodash";
import Vue from 'vue';
export const state = () => ({
  items: [],
  loaded: false
});
export const getters = {
  get(state) {
    return state.items;
  },

  loaded(state) {
    return state.loaded;
  }

};
export const mutations = {
  setItems(state, payload) {
    Vue.set(state, 'items', payload); // state.items = payload
  },

  clearItems(state, payload) {
    state.items = [];
  },

  setLoaded(state, payload) {
    state.loaded = payload;
  }

};
export const actions = {
  init({
    dispatch,
    rootGetters,
    commit
  }) {
    commit('clearItems');
    commit('setLoaded', false);
  },

  async load({
    commit
  }, contactData) {
    let breadcrumbs = [];

    if (contactData && contactData.length > 0) {
      breadcrumbs = contactData;
    }

    if (this.$router.currentRoute.matched.length > 0) {
      const component = this.$router.currentRoute.matched[0].instances.default;

      if (!isUndefined(component) && !isUndefined(component.$options.breadcrumbs)) {
        const result = component.$options.breadcrumbs.call(component);
        breadcrumbs = [...breadcrumbs, ...result];
      }
    }

    commit('setItems', breadcrumbs);
    commit('setLoaded', true);
  }

};