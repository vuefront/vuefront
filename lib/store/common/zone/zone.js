import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import ZonesGql from './list.graphql';
import ZoneGql from './get.graphql';
export var state = function () {
  return {
    zone: false,
    entities: {
      content: []
    }
  };
};
export var getters = {
  get: function get(state) {
    return state.zone;
  },
  list: function list(state) {
    return state.entities;
  }
};
export var mutations = {
  setZone: function setZone(state, payload) {
    state.zone = payload;
  },
  setEntities: function setEntities(state, payload) {
    state.entities = payload;
  }
};
export var actions = {
  list: function () {
    var _list = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, zoneData) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: ZonesGql,
                variables: zoneData
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].zonesList);
              }

            case 4:
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
    _regeneratorRuntime.mark(function _callee2(_ref2, _ref3) {
      var commit, dispatch, rootGetters, id;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              id = _ref3.id;
              _context2.next = 4;
              return dispatch('apollo/query', {
                query: ZoneGql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setZone', rootGetters['apollo/get'].zone);
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