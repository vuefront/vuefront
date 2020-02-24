import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import RegisterGql from './register.graphql';
import LoginGql from './login.graphql';
import LogoutGql from './logout.graphql';
import EditGql from './edit.graphql';
import EditPasswordGql from './editPassword.graphql';
import CheckGql from './check.graphql';
export var state = function () {
  return {
    customer: null,
    auth: false,
    token: false
  };
};
export var getters = {
  get: function get(state) {
    return state.customer;
  },
  auth: function auth(state) {
    return state.auth;
  },
  token: function token(state) {
    return state.token;
  }
};
export var mutations = {
  setCustomer: function setCustomer(state, payload) {
    state.customer = payload;
  },
  setAuth: function setAuth(state, payload) {
    state.auth = payload;
  },
  setToken: function setToken(state, payload) {
    state.token = payload;
    this.$cookies.set('token', payload);
  }
};
export var actions = {
  login: function login(_ref, customerData) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var accountLogin;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/mutate', {
                mutation: LoginGql,
                variables: customerData
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context.next = 8;
                break;
              }

              accountLogin = rootGetters['apollo/get'].accountLogin;
              commit('setCustomer', accountLogin.customer);
              commit('setToken', accountLogin.token);
              commit('setAuth', true);
              return _context.abrupt("return", true);

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
  logout: function logout(_ref2) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: LogoutGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setCustomer', {});
                commit('setToken', null);
                commit('setAuth', rootGetters['apollo/get'].accountLogout.status);
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  edit: function edit(_ref3, customerData) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        rootGetters = _ref3.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch('apollo/mutate', {
                mutation: EditGql,
                variables: {
                  customer: customerData
                }
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context3.next = 5;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountEdit);
              return _context3.abrupt("return", true);

            case 5:
              return _context3.abrupt("return", false);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  editPassword: function editPassword(_ref4, _ref5) {
    var commit = _ref4.commit,
        dispatch = _ref4.dispatch,
        rootGetters = _ref4.rootGetters;
    var password = _ref5.password;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee4() {
      return _regeneratorRuntime.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dispatch('apollo/mutate', {
                mutation: EditPasswordGql,
                variables: {
                  password: password
                }
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context4.next = 5;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountEditPassword);
              return _context4.abrupt("return", true);

            case 5:
              return _context4.abrupt("return", false);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  register: function register(_ref6, customerData) {
    var commit = _ref6.commit,
        dispatch = _ref6.dispatch,
        rootGetters = _ref6.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee5() {
      return _regeneratorRuntime.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return dispatch('apollo/mutate', {
                mutation: RegisterGql,
                variables: {
                  customer: customerData
                }
              }, {
                root: true
              });

            case 2:
              if (rootGetters['vuefront/error']) {
                _context5.next = 5;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountRegister);
              return _context5.abrupt("return", true);

            case 5:
              return _context5.abrupt("return", false);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  checkLogged: function checkLogged(_ref7) {
    var commit = _ref7.commit,
        dispatch = _ref7.dispatch,
        rootGetters = _ref7.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee6() {
      return _regeneratorRuntime.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return dispatch('apollo/query', {
                query: CheckGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error'] && rootGetters['apollo/get'].accountCheckLogged && rootGetters['apollo/get'].accountCheckLogged.customer) {
                commit('setCustomer', rootGetters['apollo/get'].accountCheckLogged.customer);
                commit('setAuth', rootGetters['apollo/get'].accountCheckLogged.status);

                if (!rootGetters['apollo/get'].accountCheckLogged.status) {
                  commit('setToken', null);
                }
              }

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
};