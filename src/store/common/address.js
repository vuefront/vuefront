import AddressesGql from '~/graphql/account/address/list.graphql'
import AddressGql from '~/graphql/account/address/get.graphql'
import AddressAddGql from '~/graphql/account/address/create.graphql'
import AddressEditGql from '~/graphql/account/address/edit.graphql'

export const state = () => ({
  address: false,
  entities: []
})

export const getters = {
  get(state) {
    return state.address
  },
  list(state) {
    return state.entities
  }
}

export const mutations = {
  setAddress(state, payload) {
    state.address = payload
  },
  setEntities(state, payload) {
    state.entities = payload
  }
}

export const actions = {
  async list({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: AddressesGql
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].accountAddressList)
    }
  },
  async get({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/query',
      {
        query: AddressGql,
        variables: { id }
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountAddress)
    }
  },
  async create({commit, dispatch, rootGetters}, {address}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: AddressAddGql,
        variables: {
          address
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountAddAddress)
    }
  },
  async edit({commit, dispatch, rootGetters}, {id, address}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: AddressEditGql,
        variables: {
          id,
          address
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountEditAddress)
    }
  }
}
