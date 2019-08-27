import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import reviewAddGql from './addReview.graphql';
export var state = function () {
  return {
    entities: {},
    product: {},
    options: {}
  };
};
export var getters = {
  list: function list(state) {
    return state.entities;
  },
  get: function get(state) {
    return state.product;
  },
  options: function options(state) {
    return state.options;
  }
};
export var mutations = {
  setEntities: function setEntities(state, products) {
    state.entities = products;
  },
  setProduct: function setProduct(state, product) {
    state.product = product;
    state.options = {};
  },
  setOptions: function setOptions(state, options) {
    state.options = options;
  }
};
export var actions = {
  addReview: function () {
    var _addReview = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, reviewData) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/mutate', {
                mutation: reviewAddGql,
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