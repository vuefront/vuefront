import ZonesGql from 'vuefront/graphql/common/zone/list.graphql'
import ZoneGql from 'vuefront/graphql/common/zone/get.graphql'

export const state = () => ({
  zone: false,
  entities: {
    content: []
  }
})

export const getters = {
  get(state) {
    return state.zone
  },
  list(state) {
    return state.entities
  }
}

export const mutations = {
  setZone(state, payload) {
    state.zone = payload
  },
  setEntities(state, payload) {
    state.entities = payload
  }
}

export const actions = {
  async list({ commit, dispatch, rootGetters }, zoneData) {
    await dispatch(
      'apollo/query',
      {
        query: ZonesGql,
        variables: zoneData
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].zonesList)
    }
  },
  async get({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/query',
      {
        query: ZoneGql,
        variables: { id }
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setZone', rootGetters['apollo/get'].zone)
    }
  }
}
