export const state = () => ({
  entities: [],
  loaded: false
})

export const getters = {
  list(state) {
    return state.entities
  },
  loaded(state) {
    return state.loaded
  }
}

export const mutations = {
  setEntities(state, items) {
    state.entities = items
  },
  addEntities(state, items) {
    state.entities = [...state.entities, ...items]
  },
  setLoaded(state, payload) {
    state.loaded = payload
  }
}
