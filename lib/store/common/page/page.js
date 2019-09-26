export var state = function () {
  return {
    page: {}
  };
};
export var getters = {
  get: function get(state) {
    return state.page;
  }
};
export var mutations = {
  setPage: function setPage(state, page) {
    state.page = page;
  }
};