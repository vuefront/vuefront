import CountriesGql from './list.graphql'
import CountryGql from './get.graphql'

export const state = () => ({
  country: false,
  entities: []
})

export const getters = {
  get(state) {
    return state.country
  },
  list(state) {
    return state.entities
  }
}

export const mutations = {
  setCountry(state, payload) {
    state.country = payload
  },
  setEntities(state, payload) {
    state.entities = payload
  }
}

export const actions = {
  async list({ commit, dispatch, rootGetters }, {page, size}) {
    await dispatch(
      'apollo/query',
      {
        query: CountriesGql,
        variables: {page, size}
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].countriesList)
    }
  },
  async get({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/query',
      {
        query: CountryGql,
        variables: { id }
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setCountry', rootGetters['apollo/get'].country)
    }
  }
}
