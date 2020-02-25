import {isUndefined} from 'lodash'
import Vue from 'vue'
export const state = () => ({
  error: false,
  ssr: false
})

export const mutations = {
  setError(state, payload) {
    state.error = payload
  },
  setSSR(state, payload) {
    state.ssr = payload
  }
}

export const getters = {
  error(state) {
    return state.error
  },
  ssr(state) {
    return state.ssr
  }
}

export const actions = {
  async vuefrontInit({ dispatch, commit }) {

    if (this.$cookies.get('token')) {
      commit('common/customer/setToken', this.$cookies.get('token'), {root: true})
    }

    await Promise.all([
      dispatch('store/currency/load', {}, { root: true }),
      dispatch('common/language/load', {}, { root: true }),
      dispatch('common/customer/checkLogged', {}, { root: true })
    ])

    if (this.$cookies.get('mode')) {
      commit('store/category/setMode', this.$cookies.get('mode'), {
        root: true
      })
    }
  },
  async nuxtServerInit({ dispatch, commit }) {
    await dispatch('vuefrontInit')
    commit('setSSR', true)
  },
  async nuxtClientInit({ dispatch, rootGetters }) {
    if (!rootGetters['vuefront/ssr']) {
      await dispatch('vuefrontInit')
    }
  }
}
