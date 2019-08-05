import editCurrencyGraphql from './edit.graphql'
import currencyGetGql from './get.graphql'

export const state = () => ({
  currency: []
})

export const getters = {
  get(state) {
    return state.currency
  }
}

export const mutations = {
  setCurrency(state, currency) {
    state.currency = currency
  }
}

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: currencyGetGql
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCurrency', rootGetters['apollo/get'].currency)
    }
  },
  async edit({ commit, dispatch, rootGetters }, { code }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: editCurrencyGraphql,
        variables: {
          code
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCurrency', rootGetters['apollo/get'].editCurrency)
    }
  }
}
