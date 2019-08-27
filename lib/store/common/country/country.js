import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import CountriesGql from './list.graphql';
import CountryGql from './get.graphql';
export var state = function () {
  return {
    country: false,
    entities: []
  };
};
export var getters = {
  get: function get(state) {
    return state.country;
  },
  list: function list(state) {
    return state.entities;
  }
};
export var mutations = {
  setCountry: function setCountry(state, payload) {
    state.country = payload;
  },
  setEntities: function setEntities(state, payload) {
    state.entities = payload;
  }
};
export var actions = {
  list: function () {
    var _list = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, page, size;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              page = _ref2.page, size = _ref2.size;
              _context.next = 4;
              return dispatch('apollo/query', {
                query: CountriesGql,
                variables: {
                  page: page,
                  size: size
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].countriesList);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function list() {
      return _list.apply(this, arguments);
    };
  }(),
  get: function () {
    var _get = _asyncToGenerator(
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
              return dispatch('apollo/query', {
                query: CountryGql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setCountry', rootGetters['apollo/get'].country);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function get() {
      return _get.apply(this, arguments);
    };
  }()
};