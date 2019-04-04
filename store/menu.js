export const state = {
  entities: []
}

export const getters = {
  list(state) {
    return state.entities
  }
}

export const mutations = {
  setEntities(state, items) {
    state.entities = items
  },
  addEntities(state, items) {
    state.entities = [...state.entities, ...items]
  }
}
