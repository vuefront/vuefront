"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _omitDeepLodash = _interopRequireDefault(require("omit-deep-lodash"));

var _axios = _interopRequireDefault(require("axios"));

var _formData = _interopRequireDefault(require("form-data"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var state = function () {
  return {
    data: {},
    prefetchData: {}
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.data;
  },
  prefetchData: function prefetchData(state) {
    return state.prefetchData;
  }
};
exports.getters = getters;
var mutations = {
  setData: function setData(state, payload) {
    state.data = _objectSpread({}, state.data, {}, payload.data);
  },
  setPrefetchData: function setPrefetchData(state, _ref) {
    var key = _ref.key,
        data = _ref.data;
    state.prefetchData[key] = data;
  }
};
exports.mutations = mutations;
var actions = {
  query: function () {
    var _query = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref2, options) {
      var commit, variables, _res;

      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref2.commit;
              _context.prev = 1;
              variables = (0, _omitDeepLodash.default)(options.variables, '__typename');
              _context.next = 5;
              return this.$vfapollo.query(_objectSpread({}, options, {
                variables: variables
              }));

            case 5:
              _res = _context.sent;
              _res = (0, _omitDeepLodash.default)(_res, '__typename');
              commit('vuefront/setError', false, {
                root: true
              });
              commit('setData', _res);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              commit('vuefront/setError', _context.t0.graphQLErrors ? _context.t0.graphQLErrors[0] : _context.t0, {
                root: true
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 11]]);
    }));

    return function query() {
      return _query.apply(this, arguments);
    };
  }(),
  mutate: function () {
    var _mutate = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref3, options) {
      var commit, variables, _res2;

      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit;
              _context2.prev = 1;
              variables = (0, _omitDeepLodash.default)(options.variables, '__typename');
              _context2.next = 5;
              return this.$vfapollo.mutate(_objectSpread({}, options, {
                variables: variables
              }));

            case 5:
              _res2 = _context2.sent;

              if (!_res2.errors) {
                commit('vuefront/setError', false, {
                  root: true
                });
                commit('setData', _res2);
              } else {
                commit('vuefront/setError', _res2.errors, {
                  root: true
                });
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              commit('vuefront/setError', _context2.t0.graphQLErrors ? _context2.t0.graphQLErrors[0] : _context2.t0, {
                root: true
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 9]]);
    }));

    return function mutate() {
      return _mutate.apply(this, arguments);
    };
  }(),
  upload: function () {
    var _upload = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref4, options) {
      var commit, variables, o, map, i, fd, key, axios, _ref5, data;

      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref4.commit;
              _context3.prev = 1;
              variables = (0, _omitDeepLodash.default)(options.variables, '__typename');
              o = {
                query: options.mutation.loc.source.body,
                variables: variables
              };
              map = {
                '0': 'file'
              };
              i = 0;
              fd = new _formData.default();
              fd.append('operations', JSON.stringify(o));

              for (key in variables) {
                if ((0, _typeof2.default)(variables[key]) === 'object' && variables[key] instanceof File) {
                  map[i] = key;
                  fd.append(i, variables[key]);
                  i++;
                }
              }

              fd.append('map', JSON.stringify(map));
              axios = _axios.default.create({
                withCredentials: true
              });
              _context3.next = 13;
              return axios.post(this.$vuefront.baseURL, fd);

            case 13:
              _ref5 = _context3.sent;
              data = _ref5.data;

              if (!data.errors) {
                commit('vuefront/setError', false, {
                  root: true
                });
                commit('setData', data);
              } else {
                commit('vuefront/setError', res.errors, {
                  root: true
                });
              }

              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](1);
              commit('vuefront/setError', _context3.t0.graphQLErrors ? _context3.t0.graphQLErrors[0] : _context3.t0, {
                root: true
              });

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 18]]);
    }));

    return function upload() {
      return _upload.apply(this, arguments);
    };
  }()
};
exports.actions = actions;