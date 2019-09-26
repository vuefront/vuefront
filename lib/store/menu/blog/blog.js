import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import categoryMenuGql from './blog.graphql';
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
  setEntities: function setEntities(state, categories) {
    if (categories) {
      state.entities = categories.content;
    }
  }
};
export var actions = {
  load: function () {
    var _load = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref) {
      var dispatch, commit, rootGetters, categoriesMenu;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit, rootGetters = _ref.rootGetters;
              _context.next = 3;
              return dispatch('apollo/query', {
                query: categoryMenuGql,
                variables: {
                  url: '/blog/category/_id'
                }
              }, {
                root: true
              });

            case 3:
              if (!rootGetters['vuefront/error']) {
                categoriesMenu = rootGetters['apollo/get'].categoriesMenu;
                commit('setEntities', categoriesMenu);
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