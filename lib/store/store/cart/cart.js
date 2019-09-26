import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import addToCartGraphql from './add.graphql';
import updateCartGraphql from './update.graphql';
import removeCartGraphql from './remove.graphql';
export var state = function () {
  return {
    cart: {
      products: []
    }
  };
};
export var getters = {
  get: function get(state) {
    return state.cart;
  }
};
export var mutations = {
  setCart: function setCart(state, cart) {
    state.cart = cart;
  }
};
export var actions = {
  add: function () {
    var _add = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, product, _ref2$quantity, quantity, _ref2$options, options, _ref2$redirect, redirect;

      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              product = _ref2.product, _ref2$quantity = _ref2.quantity, quantity = _ref2$quantity === void 0 ? 1 : _ref2$quantity, _ref2$options = _ref2.options, options = _ref2$options === void 0 ? [] : _ref2$options, _ref2$redirect = _ref2.redirect, redirect = _ref2$redirect === void 0 ? false : _ref2$redirect;
              _context.next = 4;
              return dispatch('apollo/mutate', {
                mutation: addToCartGraphql,
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
    var _update = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref3, _ref4) {
      var commit, dispatch, rootGetters, key, quantity;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              key = _ref4.key, quantity = _ref4.quantity;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: updateCartGraphql,
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
    var _remove = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref5, _ref6) {
      var commit, dispatch, rootGetters, key;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref5.commit, dispatch = _ref5.dispatch, rootGetters = _ref5.rootGetters;
              key = _ref6.key;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: removeCartGraphql,
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