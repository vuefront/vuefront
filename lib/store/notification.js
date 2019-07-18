"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.getters = exports.state = void 0;

var state = function () {
  return {
    message: '',
    error: ''
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.message;
  },
  error: function error(state) {
    return state.error;
  }
};
exports.getters = getters;
var mutations = {
  add: function add(state, message) {
    state.message = message;
  },
  error: function error(state, _error) {
    state.error = _error;
  }
};
exports.mutations = mutations;