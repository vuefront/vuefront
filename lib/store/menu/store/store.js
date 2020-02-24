import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import categoryMenuGql from './query.graphql';
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
    state.entities = categories.content;
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
      var categoriesMenu;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/query', {
                query: categoryMenuGql,
                variables: {
                  url: '/store/category/_id'
                }
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                categoriesMenu = rootGetters['apollo/get'].categoriesMenu;

                if (categoriesMenu) {
                  commit('setEntities', categoriesMenu);
                }
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