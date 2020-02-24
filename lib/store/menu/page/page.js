import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import pageMenuGql from "./page.graphql";
export var state = function () {
  return {
    entities: []
  };
};
export var getters = {
  get: function get(state) {
    return state.entities;
  }
};
export var mutations = {
  setEntities: function setEntities(state, pages) {
    state.entities = [];

    for (var key in pages.content) {
      state.entities = [].concat(_toConsumableArray(state.entities), [{
        title: pages.content[key].title,
        to: pages.content[key].keyword !== "" ? "/".concat(pages.content[key].keyword) : "/common/page/".concat(pages.content[key].id)
      }]);
    }
  }
};
export var actions = {
  load: function load(_ref) {
    var dispatch = _ref.dispatch,
        commit = _ref.commit,
        rootGetters = _ref.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var pagesList;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch("apollo/query", {
                query: pageMenuGql,
                variables: {
                  url: "/common/page/_id"
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters["vuefront/error"]) {
                pagesList = rootGetters["apollo/get"].pagesList;
                commit("setEntities", pagesList);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};