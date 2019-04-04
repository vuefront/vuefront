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
    await dispatch('store/cart/load')
  },
  async nuxtServerInit({ dispatch, commit, rootGetters }, { $cookies }) {
    await dispatch('store/category/loadMenu')
    await commit('menu/addEntities', rootGetters['store/category/menu'])

    await dispatch('blog/category/loadMenu')
    await commit('menu/addEntities', rootGetters['blog/category/menu'])

    if ($cookies.get('mode')) {
      commit('store/category/setMode', $cookies.get('mode'))
    }
  }
}
