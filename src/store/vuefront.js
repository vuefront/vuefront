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
  async vuefrontInit({ dispatch, commit, rootGetters }) {
    let menuItems = []
    if (!rootGetters['menu/loaded']) {
      this.$vuefront.options.menu.forEach(item => {
        menuItems = [
          ...menuItems,
          dispatch(`menu/${item}/load`, {}, { root: true })
        ]
      })
    }

    await Promise.all([
      dispatch('store/currency/load', {}, { root: true }),
      dispatch('common/language/load', {}, { root: true }),
      dispatch('common/customer/checkLogged', {}, { root: true }),
      ...menuItems
    ])

    if (!rootGetters['menu/loaded']) {
      this.$vuefront.options.menu.forEach(item => {
        commit('menu/addEntities', rootGetters[`menu/${item}/get`], {
          root: true
        })
      })
      commit('menu/setLoaded', true, { root: true })
    }

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
