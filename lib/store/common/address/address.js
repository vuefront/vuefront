import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import AddressAddGql from './create.graphql';
import AddressEditGql from './edit.graphql';
import AddressRemoveGql from './remove.graphql';
export var state = function () {
  return {
    address: false,
    entities: []
  };
};
export var getters = {
  get: function get(state) {
    return state.address;
  },
  list: function list(state) {
    return state.entities;
  }
};
export var mutations = {
  setAddress: function setAddress(state, payload) {
    state.address = payload;
  },
  setEntities: function setEntities(state, payload) {
    state.entities = payload;
  }
};
export var actions = {
  create: function create(_ref, _ref2) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    var address = _ref2.address;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/mutate', {
                mutation: AddressAddGql,
                variables: {
                  address: address
                }
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context.next = 5;
                break;
              }

              commit('setAddress', rootGetters['apollo/get'].accountAddAddress);
              return _context.abrupt("return", true);

            case 5:
              return _context.abrupt("return", false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  edit: function edit(_ref3, _ref4) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        rootGetters = _ref3.rootGetters;
    var id = _ref4.id,
        address = _ref4.address;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: AddressEditGql,
                variables: {
                  id: id,
                  address: address
                }
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context2.next = 5;
                break;
              }

              commit('setAddress', rootGetters['apollo/get'].accountEditAddress);
              return _context2.abrupt("return", true);

            case 5:
              return _context2.abrupt("return", false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  remove: function remove(_ref5, _ref6) {
    var commit = _ref5.commit,
        dispatch = _ref5.dispatch,
        rootGetters = _ref5.rootGetters;
    var id = _ref6.id;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch('apollo/mutate', {
                mutation: AddressRemoveGql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].accountRemoveAddress);
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