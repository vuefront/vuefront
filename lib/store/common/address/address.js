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
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, _ref2) {
      var commit, dispatch, rootGetters, address;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              address = _ref2.address;
              _context.next = 4;
              return dispatch('apollo/mutate', {
                mutation: AddressAddGql,
                variables: {
                  address: address
                }
              }, {
                root: true
              });

            case 4:
              if (rootGetters['vuefront/error']) {
                _context.next = 7;
                break;
              }

              commit('setAddress', rootGetters['apollo/get'].accountAddAddress);
              return _context.abrupt("return", true);

            case 7:
              return _context.abrupt("return", false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function create() {
      return _create.apply(this, arguments);
    };
  }(),
  edit: function () {
    var _edit = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref3, _ref4) {
      var commit, dispatch, rootGetters, id, address;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              id = _ref4.id, address = _ref4.address;
              _context2.next = 4;
              return dispatch('apollo/mutate', {
                mutation: AddressEditGql,
                variables: {
                  id: id,
                  address: address
                }
              }, {
                root: true
              });

            case 4:
              if (rootGetters['vuefront/error']) {
                _context2.next = 7;
                break;
              }

              commit('setAddress', rootGetters['apollo/get'].accountEditAddress);
              return _context2.abrupt("return", true);

            case 7:
              return _context2.abrupt("return", false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function edit() {
      return _edit.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _remove = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref5, _ref6) {
      var commit, dispatch, rootGetters, id;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref5.commit, dispatch = _ref5.dispatch, rootGetters = _ref5.rootGetters;
              id = _ref6.id;
              _context3.next = 4;
              return dispatch('apollo/mutate', {
                mutation: AddressRemoveGql,
                variables: {
                  id: id
                }
              }, {
                root: true
              });

            case 4:
              if (!rootGetters['vuefront/error']) {
                commit('setEntities', rootGetters['apollo/get'].accountRemoveAddress);
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