"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _add2 = _interopRequireDefault(require("./add.graphql"));

var _remove2 = _interopRequireDefault(require("./remove.graphql"));

var state = function () {
  return {
    wishlist: {}
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.wishlist;
  }
};
exports.getters = getters;
var mutations = {
  setWishlist: function setWishlist(state, wishlist) {
    state.wishlist = wishlist;
  }
};
exports.mutations = mutations;
var actions = {
  add: function () {
    var _add = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, product;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              product = _ref2.product;
              _context.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _add2.default,
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
    var _remove = (0, _asyncToGenerator2.default)(
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
exports.actions = actions;