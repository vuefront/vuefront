export const state = {
  error: false
}

export const mutations = {
  setError(state, payload) {
    state.error = payload
  }
}

export const getters = {
  error(state) {
    return state.error
  }
}

export const actions = {
  async nuxtServerInit({ dispatch, commit, rootGetters }) {
    await Promise.all([
      dispatch('store/currency/load', {}, { root: true }),
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
  }
}
