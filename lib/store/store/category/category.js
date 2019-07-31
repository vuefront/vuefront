"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var state = function () {
  return {
    category: {},
    mode: 'grid'
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.category;
  },
  mode: function mode(state) {
    return state.mode;
  }
};
exports.getters = getters;
var mutations = {
  setCategory: function setCategory(state, category) {
    state.category = category;
  },
  setMode: function setMode(state, payload) {
    state.mode = payload;
    this.$cookies.set('mode', payload);
  }
};
exports.mutations = mutations;
var actions = {};
exports.actions = actions;