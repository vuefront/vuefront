"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _menu = _interopRequireDefault(require("vuefront/graphql/blog/category/menu.graphql"));

var state = function () {
  return {
    menuItems: [],
    category: {}
  };
};

exports.state = state;
var getters = {
  menu: function menu(state) {
    return state.menuItems;
  },
  get: function get(state) {
    return state.category;
  }
};
exports.getters = getters;
var mutations = {
  setCategoryBlogMenu: function setCategoryBlogMenu(state, categories) {
    state.menuItems = categories.content;
  },
  setCategory: function setCategory(state, category) {
    state.category = category;
  }
};
exports.mutations = mutations;
var actions = {
  loadMenu: function () {
    var _loadMenu = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var dispatch, commit, rootGetters, categoriesMenu;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: _menu.default,
                variables: {
                  url: '/blog/category/_id'
                }
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                categoriesMenu = rootGetters['apollo/get'].categoriesMenu;
                commit('setCategoryBlogMenu', categoriesMenu);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadMenu() {
      return _loadMenu.apply(this, arguments);
    };
  }()
};
exports.actions = actions;