const state = () => ({
  message: '',
  error: ''
});
const getters = {
  get(state) {
    return state.message
  },
  error(state) {
    return state.error
  }
};
const mutations = {
  add(state, message) {
    state.message = message;
  },
  error(state, error) {
    state.error = error;
  },
};

export { getters, mutations, state };
