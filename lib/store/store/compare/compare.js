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
                query: compareGetGql
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].compare);
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
    var _add = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, product;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              product = _ref3.product;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: addToCompareGraphql,
                variables: {
                  id: Number(product.id)
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].addToCompare);
                commit('notification/add', product.name + this.app.i18n.t('elements.store.productThumb.compareNotificationText'), {
                  root: true
                });
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function add() {
      return _add.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _remove = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref4, _ref5) {
      var commit, dispatch, rootGetters, id;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
              id = _ref5.id;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: removeCompareGraphql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCompare', rootGetters['apollo/get'].removeCompare);
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