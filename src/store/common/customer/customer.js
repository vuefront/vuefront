import RegisterGql from './register.graphql'
import LoginGql from './login.graphql'
import LogoutGql from './logout.graphql'
import EditGql from './edit.graphql'
import EditPasswordGql from './editPassword.graphql'
import CheckGql from './check.graphql'

export const state = () => ({
  customer: null,
  auth: false
})

export const getters = {
  get(state) {
    return state.customer
  },
  auth(state) {
    return state.auth
  }
}

export const mutations = {
  setCustomer(state, payload) {
    state.customer = payload
  },
  setAuth(state, payload) {
    state.auth = payload
  }
}

export const actions = {
  async login({ commit, dispatch, rootGetters }, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: LoginGql,
        variables: customerData
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountLogin)
      commit('setAuth', true)
      return true
    }

    return false
  },
  async logout({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: LogoutGql
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', {})
      commit('setAuth', rootGetters['apollo/get'].accountLogout.status)
    }
  },
  async edit({ commit, dispatch, rootGetters }, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: EditGql,
        variables: {
          customer: customerData
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountEdit)

      return true
    }

    return false
  },
  async editPassword({ commit, dispatch, rootGetters }, { password }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: EditPasswordGql,
        variables: {
          password
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountEditPassword)
      return true
    }

    return false
  },
  async register({ commit, dispatch, rootGetters }, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: RegisterGql,
        variables: {
          customer: customerData
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountRegister)
      return true
    }

    return false
  },
  async checkLogged({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: CheckGql
      },
      {
        root: true
      }
    )
    if (
      !rootGetters['vuefront/error'] &&
      rootGetters['apollo/get'].accountCheckLogged &&
      rootGetters['apollo/get'].accountCheckLogged.customer
    ) {
      commit(
        'setCustomer',
        rootGetters['apollo/get'].accountCheckLogged.customer
      )
      commit('setAuth', rootGetters['apollo/get'].accountCheckLogged.status)
    }
  }
}
