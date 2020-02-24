import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import ContactSendGql from './send.graphql';
import ContactGql from './get.graphql';
export var state = function () {
  return {
    contact: null
  };
};
export var getters = {
  get: function get(state) {
    return state.contact;
  }
};
export var mutations = {
  setContact: function setContact(state, payload) {
    state.contact = payload;
  }
};
export var actions = {
  send: function send(_ref, contactData) {
    var _this = this;

    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters,
        commit = _ref.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/mutate', {
                mutation: ContactSendGql,
                variables: contactData
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context.next = 7;
                break;
              }

              commit('notification/add', _this.app.i18n.t('elements.common.contact.successText'), {
                root: true
              });
              return _context.abrupt("return", true);

            case 7:
              commit('notification/error', rootGetters['vuefront/error'].message);

            case 8:
              return _context.abrupt("return", false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  get: function get(_ref2) {
    var dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters,
        commit = _ref2.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/query', {
                query: ContactGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setContact', rootGetters['apollo/get'].contact);
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