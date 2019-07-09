const state = () => ({
  page: {}
});
const getters = {
  get(state) {
    return state.page
  }
};
const mutations = {
  setPage(state, page) {
    state.page = page;
  }
};

export { getters, mutations, state };
