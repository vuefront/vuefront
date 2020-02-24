import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import addToCompareGraphql from './add.graphql';
import removeCompareGraphql from './remove.graphql';
export var state = function () {
  return {
    compare: {}
  };
};
export var getters = {
  get: function get(state) {
    return state.compare;
  }
};
export var mutations = {
  setCompare: function setCompare(state, compare) {
    state.compare = compare;
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
                query: compareGetGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].compare);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  add: function add(_ref2, _ref3) {
    var _this = this;

    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters;
    var product = _ref3.product;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: addToCompareGraphql,
                variables: {
                  id: Number(product.id)
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].addToCompare);
                commit('notification/add', product.name + _this.app.i18n.t('elements.store.productThumb.compareNotificationText'), {
                  root: true
                });
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  remove: function remove(_ref4, _ref5) {
    var commit = _ref4.commit,
        dispatch = _ref4.dispatch,
        rootGetters = _ref4.rootGetters;
    var id = _ref5.id;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch('apollo/mutate', {
                mutation: removeCompareGraphql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].removeCompare);
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