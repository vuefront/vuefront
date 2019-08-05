"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.getters = exports.mutations = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var state = function () {
  return {
    error: false,
    ssr: false
  };
};

exports.state = state;
var mutations = {
  setError: function setError(state, payload) {
    state.error = payload;
  },
  setSSR: function setSSR(state, payload) {
    state.ssr = payload;
  }
};
exports.mutations = mutations;
var getters = {
  error: function error(state) {
    return state.error;
  },
  ssr: function ssr(state) {
    return state.ssr;
  }
};
exports.getters = getters;
var actions = {
  vuefrontInit: function () {
    var _vuefrontInit = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var dispatch, commit;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit;

              if (this.$cookies.get('token')) {
                commit('common/customer/setToken', this.$cookies.get('token'), {
                  root: true
                });
              }

              _context.next = 4;
              return Promise.all([dispatch('store/currency/load', {}, {
                root: true
              }), dispatch('common/language/load', {}, {
                root: true
              }), dispatch('common/customer/checkLogged', {}, {
                root: true
              })]);

            case 4:
              if (this.$cookies.get('mode')) {
                commit('store/category/setMode', this.$cookies.get('mode'), {
                  root: true
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function vuefrontInit() {
      return _vuefrontInit.apply(this, arguments);
    };
  }(),
  nuxtServerInit: function () {
    var _nuxtServerInit = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref2) {
      var dispatch, commit;
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch = _ref2.dispatch, commit = _ref2.commit;
              _context2.next = 3;
              return dispatch('vuefrontInit');

            case 3:
              commit('setSSR', true);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function nuxtServerInit() {
      return _nuxtServerInit.apply(this, arguments);
    };
  }(),
  nuxtClientInit: function () {
    var _nuxtClientInit = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref3) {
      var dispatch, rootGetters;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;

              if (rootGetters['vuefront/ssr']) {
                _context3.next = 4;
                break;
              }

              _context3.next = 4;
              return dispatch('vuefrontInit');

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function nuxtClientInit() {
      return _nuxtClientInit.apply(this, arguments);
    };
  }()
};
exports.actions = actions;