"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _list2 = _interopRequireDefault(require("./list.graphql"));

var _get2 = _interopRequireDefault(require("./get.graphql"));

var state = function () {
  return {
    zone: false,
    entities: {
      content: []
    }
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.zone;
  },
  list: function list(state) {
    return state.entities;
  }
};
exports.getters = getters;
var mutations = {
  setZone: function setZone(state, payload) {
    state.zone = payload;
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
    _regenerator.default.mark(function _callee(_ref, zoneData) {
      var commit, dispatch, rootGetters;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: _list2.default,
                variables: zoneData
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].zonesList);
              }

            case 4:
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
    _regenerator.default.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, id;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              id = _ref3.id;
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
                commit('setZone', rootGetters['apollo/get'].zone);
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