"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _send2 = _interopRequireDefault(require("./send.graphql"));

var _get2 = _interopRequireDefault(require("./get.graphql"));

var state = function () {
  return {
    contact: null
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.contact;
  }
};
exports.getters = getters;
var mutations = {
  setContact: function setContact(state, payload) {
    state.contact = payload;
  }
};
exports.mutations = mutations;
var actions = {
  send: function () {
    var _send = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, contactData) {
      var dispatch, rootGetters, commit;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, rootGetters = _ref.rootGetters, commit = _ref.commit;
              _context.next = 3;
              return dispatch('apollo/mutate', {
                mutation: _send2.default,
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
    var _get = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref2) {
      var dispatch, rootGetters, commit;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters, commit = _ref2.commit;
              _context2.next = 3;
              return dispatch('apollo/query', {
                query: _get2.default
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
exports.actions = actions;