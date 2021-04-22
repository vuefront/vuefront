export const state = () => ({
  manufacturer: {},
  entities: {},
  mode: "grid",
});

export const getters = {
  get(state) {
    return state.manufacturer;
  },
  list(state) {
    return state.entities;
  },
  mode(state) {
    return state.mode;
  },
};

export const mutations = {
  setEntities(state, payload) {
    state.entities = payload;
  },
  setManufacturer(state, manufacturer) {
    state.manufacturer = manufacturer;
  },
  setMode(state, payload) {
    state.mode = payload;
    this.$cookies.set("mode", payload);
  },
};

export const actions = {};
