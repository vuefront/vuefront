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
  add: function () {
    var _add = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, product;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              product = _ref2.product;
              _context.next = 4;
              return dispatch('apollo/mutate', {
                mutation: addToWishlistGraphql,
                variables: {
                  id: Number(product.id)
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setWishlist', rootGetters['apollo/get'].addToWishlist);
                commit('notification/add', product.name + this.app.i18n.t('elements.store.productThumb.wishlistNotificationText'), {
                  root: true
                });
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
  remove: function () {
    var _remove = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref3, _ref4) {
      var commit, dispatch, rootGetters, id;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              id = _ref4.id;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: removeWishlistGraphql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setWishlist', rootGetters['apollo/get'].removeWishlist);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function remove() {
      return _remove.apply(this, arguments);
    };
  }()
};