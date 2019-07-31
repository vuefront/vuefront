"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _query = _interopRequireDefault(require("./query.graphql"));

var state = function () {
  return {
    entities: []
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.entities;
  }
};
exports.getters = getters;
var mutations = {
  setEntities: function setEntities(state, categories) {
    state.entities = categories.content;
  }
};
exports.mutations = mutations;
var actions = {
  load: function () {
    var _load = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var dispatch, commit, rootGetters, categoriesMenu;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: _query.default,
                variables: {
                  url: '/store/category/_id'
                }
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                categoriesMenu = rootGetters['apollo/get'].categoriesMenu;
                commit('setEntities', categoriesMenu);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function load() {
      return _load.apply(this, arguments);
    };
  }()
};
exports.actions = actions;