import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { isUndefined } from 'lodash';
import Vue from 'vue';
export var state = function () {
  return {
    error: false,
    ssr: false
  };
};
export var mutations = {
  setError: function setError(state, payload) {
    state.error = payload;
  },
  setSSR: function setSSR(state, payload) {
    state.ssr = payload;
  }
};
export var getters = {
  error: function error(state) {
    return state.error;
  },
  ssr: function ssr(state) {
    return state.ssr;
  }
};
export var actions = {
  vuefrontInit: function vuefrontInit(_ref) {
    var _this = this;

    var dispatch = _ref.dispatch,
        commit = _ref.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.$cookies.get('token')) {
                commit('common/customer/setToken', _this.$cookies.get('token'), {
                  root: true
                });
              }

              _context.next = 3;
              return Promise.all([dispatch('store/currency/load', {}, {
                root: true
              }), dispatch('common/language/load', {}, {
                root: true
              }), dispatch('common/customer/checkLogged', {}, {
                root: true
              })]);

            case 3:
              if (_this.$cookies.get('mode')) {
                commit('store/category/setMode', _this.$cookies.get('mode'), {
                  root: true
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  nuxtServerInit: function nuxtServerInit(_ref2) {
    var dispatch = _ref2.dispatch,
        commit = _ref2.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('vuefrontInit');

            case 2:
              commit('setSSR', true);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  nuxtClientInit: function nuxtClientInit(_ref3) {
    var dispatch = _ref3.dispatch,
        rootGetters = _ref3.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (rootGetters['vuefront/ssr']) {
                _context3.next = 3;
                break;
              }

              _context3.next = 3;
              return dispatch('vuefrontInit');

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};