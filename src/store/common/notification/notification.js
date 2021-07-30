export const state = {
  message: "",
  error: "",
};

export const getters = {
  get(state) {
    return state.message;
  },
  error(state) {
    return state.error;
  },
};

export const mutations = {
  add(state, message) {
    state.message = message;
  },
  error(state, error) {
    state.error = error;
  },
};
