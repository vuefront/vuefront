import reviewAddGql from './addReview.graphql';
export const state = () => ({
  entities: {},
  product: {},
  options: {}
});
export const getters = {
  list(state) {
    return state.entities;
  },

  get(state) {
    return state.product;
  },

  options(state) {
    return state.options;
  }

};
export const mutations = {
  setEntities(state, products) {
    state.entities = products;
  },

  setProduct(state, product) {
    state.product = product;
    state.options = {};
  },

  setOptions(state, options) {
    state.options = options;
  }

};
export const actions = {
  async addReview({
    commit,
    dispatch,
    rootGetters
  }, reviewData) {
    await dispatch('apollo/mutate', {
      mutation: reviewAddGql,
      variables: reviewData
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setProduct', rootGetters['apollo/get'].addReview);
    }
  }

};