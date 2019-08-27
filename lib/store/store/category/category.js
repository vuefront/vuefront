export var state = function () {
  return {
    category: {},
    mode: 'grid'
  };
};
export var getters = {
  get: function get(state) {
    return state.category;
  },
  mode: function mode(state) {
    return state.mode;
  }
};
export var mutations = {
  setCategory: function setCategory(state, category) {
    state.category = category;
  },
  setMode: function setMode(state, payload) {
    state.mode = payload;
    this.$cookies.set('mode', payload);
  }
};
export var actions = {};