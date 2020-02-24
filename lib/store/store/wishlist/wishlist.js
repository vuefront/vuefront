import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import addToWishlistGraphql from './add.graphql';
import removeWishlistGraphql from './remove.graphql';
export var state = function () {
  return {
    wishlist: {}
  };
};
export var getters = {
  get: function get(state) {
    return state.wishlist;
  }
};
export var mutations = {
  setWishlist: function setWishlist(state, wishlist) {
    state.wishlist = wishlist;
  }
};
export var actions = {
  add: function add(_ref, _ref2) {
    var _this = this;

    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    var product = _ref2.product;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/mutate', {
                mutation: addToWishlistGraphql,
                variables: {
                  id: Number(product.id)
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setWishlist', rootGetters['apollo/get'].addToWishlist);
                commit('notification/add', product.name + _this.app.i18n.t('elements.store.productThumb.wishlistNotificationText'), {
                  root: true
                });
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  remove: function remove(_ref3, _ref4) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        rootGetters = _ref3.rootGetters;
    var id = _ref4.id;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: removeWishlistGraphql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setWishlist', rootGetters['apollo/get'].removeWishlist);
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};