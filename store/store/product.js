import * as reviewAddGql from '~/graphql/store/review/addReview.graphql'

export const state = {
  entities: {},
  product: {}
}

export const getters = {
  list(state) {
    return state.entities
  },
  get(state) {
    return state.product
  }
}

export const mutations = {
  setEntities(state, products) {
    state.entities = products
  },
  setProduct(state, product) {
    state.product = product
  }
}

export const actions = {
  async addReview({ commit, dispatch, rootGetters }, reviewData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: reviewAddGql,
        variables: reviewData
      },
      {
        root: true
      }
    )

    if (!rootGetters['error']) {
      commit('setProduct', rootGetters['apollo/get'].addReview)
    }
  }
}
