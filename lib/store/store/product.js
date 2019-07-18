"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _addReview2 = _interopRequireDefault(require("vuefront/graphql/store/review/addReview.graphql"));

var state = function () {
  return {
    entities: {},
    product: {}
  };
};

exports.state = state;
var getters = {
  list: function list(state) {
    return state.entities;
  },
  get: function get(state) {
    return state.product;
  }
};
exports.getters = getters;
var mutations = {
  setEntities: function setEntities(state, products) {
    state.entities = products;
  },
  setProduct: function setProduct(state, product) {
    state.product = product;
  }
};
exports.mutations = mutations;
var actions = {
  addReview: function () {
    var _addReview = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, reviewData) {
      var commit, dispatch, rootGetters;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/mutate', {
                mutation: _addReview2.default,
                variables: reviewData
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setProduct', rootGetters['apollo/get'].addReview);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addReview() {
      return _addReview.apply(this, arguments);
    };
  }()
};
exports.actions = actions;