"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _addToCart = _interopRequireDefault(require("vuefront/graphql/store/cart/addToCart.graphql"));

var _updateCart = _interopRequireDefault(require("vuefront/graphql/store/cart/updateCart.graphql"));

var _removeCart = _interopRequireDefault(require("vuefront/graphql/store/cart/removeCart.graphql"));

var _get = _interopRequireDefault(require("vuefront/graphql/store/cart/get.graphql"));

var state = function () {
  return {
    cart: {}
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.cart;
  }
};
exports.getters = getters;
var mutations = {
  setCart: function setCart(state, cart) {
    state.cart = cart;
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
                commit('setCart', rootGetters['apollo/get'].cart);
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
  add: function () {
    var _add = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, id, quantity, options;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              id = _ref3.id, quantity = _ref3.quantity, options = _ref3.options;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _addToCart.default,
                variables: {
                  id: id,
                  quantity: quantity,
                  options: options
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].addToCart);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function add() {
      return _add.apply(this, arguments);
    };
  }(),
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref4, _ref5) {
      var commit, dispatch, rootGetters, key, quantity;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
              key = _ref5.key, quantity = _ref5.quantity;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _updateCart.default,
                variables: {
                  key: key,
                  quantity: quantity
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].updateCart);
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function update() {
      return _update.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _remove = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(_ref6, _ref7) {
      var commit, dispatch, rootGetters, key;
      return _regenerator.default.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit = _ref6.commit, dispatch = _ref6.dispatch, rootGetters = _ref6.rootGetters;
              key = _ref7.key;
              _context4.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _removeCart.default,
                variables: {
                  key: key
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].removeCart);
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function remove() {
      return _remove.apply(this, arguments);
    };
  }()
};
exports.actions = actions;