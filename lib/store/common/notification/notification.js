export var state = function () {
  return {
    message: '',
    error: ''
  };
};
export var getters = {
  get: function get(state) {
    return state.message;
  },
  error: function error(state) {
    return state.error;
  }
};
export var mutations = {
  add: function add(state, message) {
    state.message = message;
  },
  error: function error(state, _error) {
    state.error = _error;
  }
};