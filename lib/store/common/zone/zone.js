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
  list: function list(_ref, zoneData) {
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
                query: ZonesGql,
                variables: zoneData
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].zonesList);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  get: function get(_ref2, _ref3) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters;
    var id = _ref3.id;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/query', {
                query: ZoneGql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setZone', rootGetters['apollo/get'].zone);
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