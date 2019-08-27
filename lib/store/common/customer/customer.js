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
  login: function () {
    var _login = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, customerData) {
      var commit, dispatch, rootGetters, accountLogin;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/mutate', {
                mutation: LoginGql,
                variables: customerData
              }, {
                root: true
              });

            case 3:
              if (rootGetters['vuefront/error']) {
                _context.next = 9;
                break;
              }

              accountLogin = rootGetters['apollo/get'].accountLogin;
              commit('setCustomer', accountLogin.customer);
              commit('setToken', accountLogin.token);
              commit('setAuth', true);
              return _context.abrupt("return", true);

            case 9:
              return _context.abrupt("return", false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function login() {
      return _login.apply(this, arguments);
    };
  }(),
  logout: function () {
    var _logout = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(_ref2) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters;
              _context2.next = 3;
              return dispatch('apollo/mutate', {
                mutation: LogoutGql
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                commit('setCustomer', {});
                commit('setToken', null);
                commit('setAuth', rootGetters['apollo/get'].accountLogout.status);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function logout() {
      return _logout.apply(this, arguments);
    };
  }(),
  edit: function () {
    var _edit = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref3, customerData) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit, dispatch = _ref3.dispatch, rootGetters = _ref3.rootGetters;
              _context3.next = 3;
              return dispatch('apollo/mutate', {
                mutation: EditGql,
                variables: {
                  customer: customerData
                }
              }, {
                root: true
              });

            case 3:
              if (rootGetters['vuefront/error']) {
                _context3.next = 6;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountEdit);
              return _context3.abrupt("return", true);

            case 6:
              return _context3.abrupt("return", false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function edit() {
      return _edit.apply(this, arguments);
    };
  }(),
  editPassword: function () {
    var _editPassword = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee4(_ref4, _ref5) {
      var commit, dispatch, rootGetters, password;
      return _regeneratorRuntime.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
              password = _ref5.password;
              _context4.next = 4;
              return dispatch('apollo/mutate', {
                mutation: EditPasswordGql,
                variables: {
                  password: password
                }
              }, {
                root: true
              });

            case 4:
              if (rootGetters['vuefront/error']) {
                _context4.next = 7;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountEditPassword);
              return _context4.abrupt("return", true);

            case 7:
              return _context4.abrupt("return", false);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function editPassword() {
      return _editPassword.apply(this, arguments);
    };
  }(),
  register: function () {
    var _register = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee5(_ref6, customerData) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              commit = _ref6.commit, dispatch = _ref6.dispatch, rootGetters = _ref6.rootGetters;
              _context5.next = 3;
              return dispatch('apollo/mutate', {
                mutation: RegisterGql,
                variables: {
                  customer: customerData
                }
              }, {
                root: true
              });

            case 3:
              if (rootGetters['vuefront/error']) {
                _context5.next = 6;
                break;
              }

              commit('setCustomer', rootGetters['apollo/get'].accountRegister);
              return _context5.abrupt("return", true);

            case 6:
              return _context5.abrupt("return", false);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function register() {
      return _register.apply(this, arguments);
    };
  }(),
  checkLogged: function () {
    var _checkLogged = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee6(_ref7) {
      var commit, dispatch, rootGetters;
      return _regeneratorRuntime.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              commit = _ref7.commit, dispatch = _ref7.dispatch, rootGetters = _ref7.rootGetters;
              _context6.next = 3;
              return dispatch('apollo/query', {
                query: CheckGql
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error'] && rootGetters['apollo/get'].accountCheckLogged && rootGetters['apollo/get'].accountCheckLogged.customer) {
                commit('setCustomer', rootGetters['apollo/get'].accountCheckLogged.customer);
                commit('setAuth', rootGetters['apollo/get'].accountCheckLogged.status);

                if (!rootGetters['apollo/get'].accountCheckLogged.status) {
                  commit('setToken', null);
                }
              }

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function checkLogged() {
      return _checkLogged.apply(this, arguments);
    };
  }()
};