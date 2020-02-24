import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import editLanguageGraphql from './edit.graphql';
import languageGetGql from './get.graphql';
import { find, isEmpty } from 'lodash';
export var state = function () {
  return {
    language: [],
    locale: 'en-gb'
  };
};
export var getters = {
  get: function get(state) {
    return state.language;
  },
  locale: function locale(state) {
    return state.locale;
  }
};
export var mutations = {
  setLanguage: function setLanguage(state, language) {
    state.language = language;
  },
  setLocal: function setLocal(state, locale) {
    state.locale = locale;
  }
};
export var actions = {
  load: function load(_ref) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var active;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/query', {
                query: languageGetGql
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setLanguage', rootGetters['apollo/get'].language);
                active = find(rootGetters['apollo/get'].language, {
                  active: true
                });

                if (active) {
                  commit('setLocal', active.code);
                }
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  edit: function edit(_ref2, _ref3) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        rootGetters = _ref2.rootGetters;
    var code = _ref3.code;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch('apollo/mutate', {
                mutation: editLanguageGraphql,
                variables: {
                  code: code
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setLanguage', rootGetters['apollo/get'].editLanguage);
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