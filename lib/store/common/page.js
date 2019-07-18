"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.getters = exports.state = void 0;

var state = function () {
  return {
    page: {}
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.page;
  }
};
exports.getters = getters;
var mutations = {
  setPage: function setPage(state, page) {
    state.page = page;
  }
};
exports.mutations = mutations;