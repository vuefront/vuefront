import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import editCurrencyGraphql from './edit.graphql';
import currencyGetGql from './get.graphql';
export var state = function () {
  return {
    currency: []
  };
};
export var getters = {
  get: function get(state) {
    return state.currency;
  }
};
export var mutations = {
  setCurrency: function setCurrency(state, currency) {
    state.currency = currency;
  }
};
export var actions = {
  load: function load(_ref) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/query', {
                query: currencyGetGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].currency);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  edit: function edit(_ref2, _ref3) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters;
    var code = _ref3.code;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: editCurrencyGraphql,
                variables: {
                  code: code
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].editCurrency);
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