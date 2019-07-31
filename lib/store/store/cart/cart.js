"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _add2 = _interopRequireDefault(require("./add.graphql"));

var _update2 = _interopRequireDefault(require("./update.graphql"));

var _remove2 = _interopRequireDefault(require("./remove.graphql"));

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
  add: function () {
    var _add = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, product, _ref2$quantity, quantity, _ref2$options, options, _ref2$redirect, redirect;

      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              product = _ref2.product, _ref2$quantity = _ref2.quantity, quantity = _ref2$quantity === void 0 ? 1 : _ref2$quantity, _ref2$options = _ref2.options, options = _ref2$options === void 0 ? [] : _ref2$options, _ref2$redirect = _ref2.redirect, redirect = _ref2$redirect === void 0 ? false : _ref2$redirect;
              _context.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _add2.default,
                variables: {
                  id: product.id,
                  quantity: quantity,
                  options: options
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].addToCart);
                commit('notification/add', product.name + this.app.i18n.t('elements.store.productThumb.notificationText'), {
                  root: true
                });
              } else {
                commit('notification/error', rootGetters['vuefront/error'].message, {
                  root: true
                });

                if (redirect) {
                  this.$router.push('/store/product/' + product.id);
                }
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function add() {
      return _add.apply(this, arguments);
    };
  }(),
  update: function () {
    var _update = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref3, _ref4) {
      var commit, dispatch, rootGetters, key, quantity;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              key = _ref4.key, quantity = _ref4.quantity;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _update2.default,
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
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function update() {
      return _update.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _remove = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref5, _ref6) {
      var commit, dispatch, rootGetters, key;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref5.commit, dispatch = _ref5.dispatch, rootGetters = _ref5.rootGetters;
              key = _ref6.key;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _remove2.default,
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
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function remove() {
      return _remove.apply(this, arguments);
    };
  }()
};
exports.actions = actions;