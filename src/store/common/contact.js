import ContactSendGql from '~/graphql/common/contact/send.graphql'
import ContactGql from '~/graphql/common/contact/get.graphql'

export const state = () => ({
  contact: null
})

export const getters = {
  get(state) {
    return state.contact
  }
}

export const mutations = {
  setContact(state, payload) {
    state.contact = payload
  }
}

export const actions = {
  async send({ dispatch }, contactData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: ContactSendGql,
        variables: contactData
      },
      {
        root: true
      }
    )
  },
  async get({ dispatch, rootGetters, commit }) {
    await dispatch(
      'apollo/query',
      {
        query: ContactGql
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setContact', rootGetters['apollo/get'].contact)
    }
  }
}
