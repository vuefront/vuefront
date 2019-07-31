"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var state = function () {
  return {
    category: {}
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.category;
  }
};
exports.getters = getters;
var mutations = {
  setCategory: function setCategory(state, category) {
    state.category = category;
  }
};
exports.mutations = mutations;
var actions = {};
exports.actions = actions;