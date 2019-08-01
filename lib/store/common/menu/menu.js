"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.getters = exports.state = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lodash = require("lodash");

var state = function () {
  return {
    entities: {},
    loaded: {}
  };
};

exports.state = state;
var getters = {
  list: function list(state) {
    return function (id) {
      return !(0, _lodash.isUndefined)(state.entities[id]) ? state.entities[id] : [];
    };
  },
  loaded: function loaded(state) {
    return function (id) {
      return !(0, _lodash.isUndefined)(state.loaded[id]) ? state.loaded[id] : false;
    };
  }
};
exports.getters = getters;
var mutations = {
  setEntities: function setEntities(state, _ref) {
    var id = _ref.id,
        items = _ref.items;
    state.entities[id] = items;
  },
  addEntities: function addEntities(state, _ref2) {
    var id = _ref2.id,
        items = _ref2.items;
    state.entities[id] = [].concat((0, _toConsumableArray2.default)(state.entities[id]), (0, _toConsumableArray2.default)(items));
  },
  setLoaded: function setLoaded(state, _ref3) {
    var id = _ref3.id,
        loaded = _ref3.loaded;
    state.loaded[id] = loaded;
  }
};
exports.mutations = mutations;