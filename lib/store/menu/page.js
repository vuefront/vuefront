"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _menu = _interopRequireDefault(require("vuefront/graphql/common/page/menu.graphql"));

var state = function () {
  return {
    entities: []
  };
};

exports.state = state;
var getters = {
  get: function get(state) {
    return state.entities;
  }
};
exports.getters = getters;
var mutations = {
  setEntities: function setEntities(state, pages) {
    state.entities = [];

    for (var key in pages.content) {
      state.entities = [].concat((0, _toConsumableArray2.default)(state.entities), [{
        title: pages.content[key].title,
        to: pages.content[key].keyword !== "" ? "/".concat(pages.content[key].keyword) : "/common/page/".concat(pages.content[key].id)
      }]);
    }
  }
};
exports.mutations = mutations;
var actions = {
  load: function () {
    var _load = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var dispatch, commit, rootGetters, pagesList;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch("apollo/query", {
                query: _menu.default,
                variables: {
                  url: "/common/page/_id"
                }
              }, {
                root: true
              });

            case 3:
              if (!rootGetters["vuefront/error"]) {
                pagesList = rootGetters["apollo/get"].pagesList;
                commit("setEntities", pagesList);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function load() {
      return _load.apply(this, arguments);
    };
  }()
};
exports.actions = actions;