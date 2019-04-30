export const state = {
  error: false,
  ssr: false
}

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
    return state.error
  }
}

export const actions = {
  async vuefrontInit({dispatch, commit, rootGetters}) {
    await Promise.all([
      dispatch('store/currency/load', {}, { root: true }),
      dispatch('common/language/load', {}, { root: true }),
      dispatch('common/customer/checkLogged', {}, { root: true }),
      dispatch('store/category/loadMenu', {}, { root: true }),
      dispatch('blog/category/loadMenu', {}, { root: true })
    ])

    commit('menu/addEntities', rootGetters['store/category/menu'], {
      root: true
    })

    commit('menu/addEntities', rootGetters['blog/category/menu'], {
      root: true
    })
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
    if(!rootGetters['ssr']){
      await dispatch('vuefrontInit')
    }
  },
}
