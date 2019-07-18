"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _list2 = _interopRequireDefault(require("vuefront/graphql/common/country/list.graphql"));

var _get2 = _interopRequireDefault(require("vuefront/graphql/common/country/get.graphql"));

var state = function () {
  return {
    country: false,
    entities: []
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.country;
  },
  list: function list(state) {
    return state.entities;
  }
};
exports.getters = getters;
var mutations = {
  setCountry: function setCountry(state, payload) {
    state.country = payload;
  },
  setEntities: function setEntities(state, payload) {
    state.entities = payload;
  }
};
exports.mutations = mutations;
var actions = {
  list: function () {
    var _list = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, page, size;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              page = _ref2.page, size = _ref2.size;
              _context.next = 4;
              return dispatch('apollo/query', {
                query: _list2.default,
                variables: {
                  page: page,
                  size: size
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].countriesList);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function list() {
      return _list.apply(this, arguments);
    };
  }(),
  get: function () {
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref3, _ref4) {
      var commit, dispatch, rootGetters, id;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              id = _ref4.id;
              _context2.next = 4;
              return dispatch('apollo/query', {
                query: _get2.default,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCountry', rootGetters['apollo/get'].country);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function get() {
      return _get.apply(this, arguments);
    };
  }()
};
exports.actions = actions;