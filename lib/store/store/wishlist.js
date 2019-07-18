"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _addToWishlist = _interopRequireDefault(require("vuefront/graphql/store/wishlist/addToWishlist.graphql"));

var _removeWishlist = _interopRequireDefault(require("vuefront/graphql/store/wishlist/removeWishlist.graphql"));

var _get = _interopRequireDefault(require("vuefront/graphql/store/wishlist/get.graphql"));

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
                commit('setWishlist', rootGetters['apollo/get'].wishlist);
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
                mutation: _addToWishlist.default,
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
                commit('setWishlist', rootGetters['apollo/get'].addToWishlist);
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
  remove: function () {
    var _remove = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref4, _ref5) {
      var commit, dispatch, rootGetters, id;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
              id = _ref5.id;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: _removeWishlist.default,
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