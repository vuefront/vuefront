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
  async nuxtClientInit({ dispatch }) {
    await dispatch('store/cart/load', {}, { root: true })
  },
  async nuxtServerInit({ dispatch, commit, rootGetters }) {
    await dispatch('store/category/loadMenu', {}, { root: true })
    await commit('menu/addEntities', rootGetters['store/category/menu'], {
      root: true
    })

    await dispatch('blog/category/loadMenu', {}, { root: true })
    await commit('menu/addEntities', rootGetters['blog/category/menu'], {
      root: true
    })
    if (this.$cookies.get('mode')) {
      commit('store/category/setMode', this.$cookies.get('mode'), {
        root: true
      })
    }
  }
}
