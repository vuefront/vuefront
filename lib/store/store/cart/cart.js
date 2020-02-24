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
  add: function add(_ref, _ref2) {
    var _this = this;

    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    var product = _ref2.product,
        _ref2$quantity = _ref2.quantity,
        quantity = _ref2$quantity === void 0 ? 1 : _ref2$quantity,
        _ref2$options = _ref2.options,
        options = _ref2$options === void 0 ? [] : _ref2$options,
        _ref2$redirect = _ref2.redirect,
        redirect = _ref2$redirect === void 0 ? false : _ref2$redirect;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
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

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].addToCart);
                commit('notification/add', product.name + _this.app.i18n.t('elements.store.productThumb.notificationText'), {
                  root: true
                });
              } else {
                commit('notification/error', rootGetters['vuefront/error'].message, {
                  root: true
                });

                if (redirect) {
                  _this.$router.push('/store/product/' + product.id);
                }
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  update: function update(_ref3, _ref4) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        rootGetters = _ref3.rootGetters;
    var key = _ref4.key,
        quantity = _ref4.quantity;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: updateCartGraphql,
                variables: {
                  key: key,
                  quantity: quantity
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].updateCart);
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  remove: function remove(_ref5, _ref6) {
    var commit = _ref5.commit,
        dispatch = _ref5.dispatch,
        rootGetters = _ref5.rootGetters;
    var key = _ref6.key;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch('apollo/mutate', {
                mutation: removeCartGraphql,
                variables: {
                  key: key
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCart', rootGetters['apollo/get'].removeCart);
              }

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};