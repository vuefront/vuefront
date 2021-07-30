export const state = {
  page: {},
};

export const getters = {
  get(state) {
    return state.page;
  },
};

export const mutations = {
  setPage(state, page) {
    state.page = page;
  },
};
