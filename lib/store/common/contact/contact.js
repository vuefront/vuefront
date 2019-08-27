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
  send: function () {
    var _send = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, contactData) {
      var dispatch, rootGetters, commit;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, rootGetters = _ref.rootGetters, commit = _ref.commit;
              _context.next = 3;
              return dispatch('apollo/mutate', {
                mutation: ContactSendGql,
                variables: contactData
              }, {
                root: true
              });

            case 3:
              if (rootGetters['vuefront/error']) {
                _context.next = 8;
                break;
              }

              commit('notification/add', this.app.i18n.t('elements.common.contact.successText'), {
                root: true
              });
              return _context.abrupt("return", true);

            case 8:
              commit('notification/error', rootGetters['vuefront/error'].message);

            case 9:
              return _context.abrupt("return", false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function send() {
      return _send.apply(this, arguments);
    };
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref2) {
      var dispatch, rootGetters, commit;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters, commit = _ref2.commit;
              _context2.next = 3;
              return dispatch('apollo/query', {
                query: ContactGql
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setContact', rootGetters['apollo/get'].contact);
              }

            case 4:
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