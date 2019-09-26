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
  load: function () {
    var _load = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: currencyGetGql
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].currency);
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
  edit: function () {
    var _edit = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, code;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              code = _ref3.code;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: editCurrencyGraphql,
                variables: {
                  code: code
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCurrency', rootGetters['apollo/get'].editCurrency);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function edit() {
      return _edit.apply(this, arguments);
    };
  }()
};