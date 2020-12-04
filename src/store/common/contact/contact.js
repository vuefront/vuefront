import gql from 'graphql-tag'

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
  async send({dispatch, rootGetters, commit}, contactData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: gql`mutation($name: String, $email: String, $message: String) {
          contactSend(name: $name, email: $email, message: $message) {
            status
          }
        }`,
        variables: contactData
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit(
        'notification/add',
        this.app.i18n.t('elements.common.contact.successText'),
        {root: true}
      )
      return true
    } else {
      commit('notification/error', rootGetters['vuefront/error'].message)
    }

    return false
  },
  async get({dispatch, rootGetters, commit}) {
    await dispatch(
      'apollo/query',
      {
        query: gql`{
          contact {
            locations {
              address
              fax
              image
              geocode
              telephone
              open,
              comment
            }
            address
            email
            fax
            comment
            open
            store
            telephone
          }
        }`
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
