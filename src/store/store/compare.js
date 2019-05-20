import addToCompareGraphql from '~/graphql/store/compare/addToCompare.graphql'
import removeCompareGraphql from '~/graphql/store/compare/removeCompare.graphql'
import compareGetGql from '~/graphql/store/compare/get.graphql'

export const state = () => ({
  compare: {}
})

export const getters = {
  get(state) {
    return state.compare
  }
}

export const mutations = {
  setCompare(state, compare) {
    state.compare = compare
  }
}

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: compareGetGql
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].compare)
    }
  },
  async add({ commit, dispatch, rootGetters }, { id, quantity, options }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: addToCompareGraphql,
        variables: {
          id,
          quantity,
          options
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].addToCompare)
    }
  },
  async remove({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: removeCompareGraphql,
        variables: {
          id
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCompare', rootGetters['apollo/get'].removeCompare)
    }
  }
}
