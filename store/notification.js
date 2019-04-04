export const state = {
  message: ''
}

export const getters = {
  get(state) {
    return state.message
  }
}

export const mutations = {
  add(state, message) {
    state.message = message
  }
}
