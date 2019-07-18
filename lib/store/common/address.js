"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _list2 = _interopRequireDefault(require("vuefront/graphql/account/address/list.graphql"));

var _get2 = _interopRequireDefault(require("vuefront/graphql/account/address/get.graphql"));

var _create2 = _interopRequireDefault(require("vuefront/graphql/account/address/create.graphql"));

var _edit2 = _interopRequireDefault(require("vuefront/graphql/account/address/edit.graphql"));

var _remove2 = _interopRequireDefault(require("vuefront/graphql/account/address/remove.graphql"));

var state = function () {
  return {
    address: false,
    entities: []
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.address;
  },
  list: function list(state) {
    return state.entities;
  }
};
exports.getters = getters;
var mutations = {
  setAddress: function setAddress(state, payload) {
    state.address = payload;
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
    _regenerator.default.mark(function _callee(_ref) {
      var commit, dispatch, rootGetters;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: _list2.default
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].accountAddressList);
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
                commit('setAddress', rootGetters['apollo/get'].accountAddress);
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
  }(),
  create: function () {
    var _create = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref4, _ref5) {
      var commit, dispatch, rootGetters, address;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
              address = _ref5.address;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _create2.default,
                variables: {
                  address: address
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setAddress', rootGetters['apollo/get'].accountAddAddress);
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function create() {
      return _create.apply(this, arguments);
    };
  }(),
  edit: function () {
    var _edit = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(_ref6, _ref7) {
      var commit, dispatch, rootGetters, id, address;
      return _regenerator.default.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit = _ref6.commit, dispatch = _ref6.dispatch, rootGetters = _ref6.rootGetters;
              id = _ref7.id, address = _ref7.address;
              _context4.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _edit2.default,
                variables: {
                  id: id,
                  address: address
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setAddress', rootGetters['apollo/get'].accountEditAddress);
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function edit() {
      return _edit.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _remove = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(_ref8, _ref9) {
      var commit, dispatch, rootGetters, id;
      return _regenerator.default.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              commit = _ref8.commit, dispatch = _ref8.dispatch, rootGetters = _ref8.rootGetters;
              id = _ref9.id;
              _context5.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _remove2.default,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].accountRemoveAddress);
              }

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function remove() {
      return _remove.apply(this, arguments);
    };
  }()
};
exports.actions = actions;