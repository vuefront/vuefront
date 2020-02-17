import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { isUndefined } from "lodash";
export var state = function () {
  return {
    items: [],
    loaded: false
  };
};
export var getters = {
  get: function get(state) {
    return state.items;
  },
  loaded: function loaded(state) {
    return state.loaded;
  }
};
export var mutations = {
  setItems: function setItems(state, payload) {
    state.items = payload;
  },
  clearItems: function clearItems(state) {
    state.items = [];
  },
  setLoaded: function setLoaded(state, payload) {
    state.loaded = payload;
  }
};
export var actions = {
  init: function init(_ref) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters,
        commit = _ref.commit;
    commit('clearItems');
    commit('setLoaded', false);
  },
  load: function () {
    var _load = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2, contactData) {
      var dispatch, rootGetters, commit, breadcrumbs, component, result;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref2.dispatch, rootGetters = _ref2.rootGetters, commit = _ref2.commit;
              breadcrumbs = [];

              if (contactData && contactData.length > 0) {
                breadcrumbs = contactData;
              }

              if (process.client) {
                if (this.$router.currentRoute.matched.length > 0) {
                  component = this.$router.currentRoute.matched[0].instances["default"];

                  if (!isUndefined(component) && !isUndefined(component.$options.breadcrumbs)) {
                    result = component.$options.breadcrumbs.call(component);
                    breadcrumbs = [].concat(_toConsumableArray(breadcrumbs), _toConsumableArray(result));
                  }
                }
              }

              console.log('page');
              console.log(breadcrumbs);
              commit('setItems', breadcrumbs);
              commit('setLoaded', true);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function load() {
      return _load.apply(this, arguments);
    };
  }()
};