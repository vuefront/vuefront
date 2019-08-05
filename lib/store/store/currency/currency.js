"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _edit2 = _interopRequireDefault(require("./edit.graphql"));

var _get = _interopRequireDefault(require("./get.graphql"));

var state = function () {
  return {
    currency: []
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.currency;
  }
};
exports.getters = getters;
var mutations = {
  setCurrency: function setCurrency(state, currency) {
    state.currency = currency;
  }
};
exports.mutations = mutations;
var actions = {
  load: function () {
    var _load = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var commit, dispatch, rootGetters;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: _get.default
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].currency);
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
  }(),
  edit: function () {
    var _edit = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, code;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              code = _ref3.code;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _edit2.default,
                variables: {
                  code: code
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].editCurrency);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function edit() {
      return _edit.apply(this, arguments);
    };
  }()
};
exports.actions = actions;