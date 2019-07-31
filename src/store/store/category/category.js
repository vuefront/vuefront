export const state = () => ({
  category: {},
  mode: 'grid'
})

export const getters = {
  get(state) {
    return state.category
  },
  mode(state) {
    return state.mode
  }
}

export const mutations = {
  setCategory(state, category) {
    state.category = category
  },
  setMode(state, payload) {
    state.mode = payload
    this.$cookies.set('mode', payload)
  }
}

export const actions = {}
