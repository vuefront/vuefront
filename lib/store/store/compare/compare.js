import addToCompareGraphql from './add.graphql';
import removeCompareGraphql from './remove.graphql';
export const state = () => ({
  compare: {}
});
export const getters = {
  get(state) {
    return state.compare;
  }

};
export const mutations = {
  setCompare(state, compare) {
    state.compare = compare;
  }

};
export const actions = {
  async load({
    commit,
    dispatch,
    rootGetters
  }) {
    await dispatch('apollo/query', {
      query: compareGetGql
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].compare);
    }
  },

  async add({
    commit,
    dispatch,
    rootGetters
  }, {
    product
  }) {
    await dispatch('apollo/mutate', {
      mutation: addToCompareGraphql,
      variables: {
        id: Number(product.id)
      }
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].addToCompare);
      commit('notification/add', product.name + this.app.i18n.t('elements.store.productThumb.compareNotificationText'), {
        root: true
      });
    }
  },

  async remove({
    commit,
    dispatch,
    rootGetters
  }, {
    id
  }) {
    await dispatch('apollo/mutate', {
      mutation: removeCompareGraphql,
      variables: {
        id
      }
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].removeCompare);
    }
  }

};