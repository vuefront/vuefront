import _typeof from "@babel/runtime/helpers/typeof";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import omitDeepLodash from 'omit-deep-lodash';
import Axios from 'axios';
import FormData from 'form-data';
export var state = function () {
  return {
    data: {},
    prefetchData: {}
  };
};
export var getters = {
  get: function get(state) {
    return state.data;
  },
  prefetchData: function prefetchData(state) {
    return state.prefetchData;
  }
};
export var mutations = {
  setData: function setData(state, payload) {
    state.data = _objectSpread({}, state.data, {}, payload.data);
  },
  setPrefetchData: function setPrefetchData(state, _ref) {
    var key = _ref.key,
        data = _ref.data;
    state.prefetchData[key] = data;
  }
};
export var actions = {
  query: function query(_ref2, options) {
    var _this = this;

    var commit = _ref2.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var variables, _res;

      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              variables = omitDeepLodash(options.variables, '__typename');
              _context.next = 4;
              return _this.$vfapollo.query(_objectSpread({}, options, {
                variables: variables
              }));

            case 4:
              _res = _context.sent;
              _res = omitDeepLodash(_res, '__typename');
              commit('vuefront/setError', false, {
                root: true
              });
              commit('setData', _res);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              commit('vuefront/setError', _context.t0.graphQLErrors ? _context.t0.graphQLErrors[0] : _context.t0, {
                root: true
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  mutate: function mutate(_ref3, options) {
    var _this2 = this;

    var commit = _ref3.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      var variables, _res2;

      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              variables = omitDeepLodash(options.variables, '__typename');
              _context2.next = 4;
              return _this2.$vfapollo.mutate(_objectSpread({}, options, {
                variables: variables
              }));

            case 4:
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

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              commit('vuefront/setError', _context2.t0.graphQLErrors ? _context2.t0.graphQLErrors[0] : _context2.t0, {
                root: true
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }))();
  },
  upload: function upload(_ref4, options) {
    var _this3 = this;

    var commit = _ref4.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      var variables, o, map, i, fd, key, axios, _ref5, data;

      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              variables = omitDeepLodash(options.variables, '__typename');
              o = {
                query: options.mutation.loc.source.body,
                variables: variables
              };
              map = {
                '0': 'file'
              };
              i = 0;
              fd = new FormData();
              fd.append('operations', JSON.stringify(o));

              for (key in variables) {
                if (_typeof(variables[key]) === 'object' && variables[key] instanceof File) {
                  map[i] = key;
                  fd.append(i, variables[key]);
                  i++;
                }
              }

              fd.append('map', JSON.stringify(map));
              axios = Axios.create({
                withCredentials: true
              });
              _context3.next = 12;
              return axios.post(_this3.$vuefront.baseURL, fd);

            case 12:
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

              _context3.next = 20;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](0);
              commit('vuefront/setError', _context3.t0.graphQLErrors ? _context3.t0.graphQLErrors[0] : _context3.t0, {
                root: true
              });

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 17]]);
    }))();
  }
};