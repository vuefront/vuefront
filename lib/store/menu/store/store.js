import categoryMenuGql from './query.graphql';
export const state = () => ({
  entities: []
});
export const getters = {
  get(state) {
    return state.entities;
  }

};
export const mutations = {
  setEntities(state, categories) {
    state.entities = categories.content;
  }

};
export const actions = {
  async load({
    dispatch,
    commit,
    rootGetters
  }) {
    await dispatch('apollo/query', {
      query: categoryMenuGql,
      variables: {
        url: '/store/category/_id'
      }
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      const {
        categoriesMenu
      } = rootGetters['apollo/get'];

      if (categoriesMenu) {
        commit('setEntities', categoriesMenu);
      }
    }
  }

};