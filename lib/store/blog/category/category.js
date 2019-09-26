export var state = function () {
  return {
    category: {}
  };
};
export var getters = {
  get: function get(state) {
    return state.category;
  }
};
export var mutations = {
  setCategory: function setCategory(state, category) {
    state.category = category;
  }
};
export var actions = {};