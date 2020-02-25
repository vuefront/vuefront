import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { isUndefined } from "lodash";
import Vue from 'vue';
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
    Vue.set(state, 'items', payload); // state.items = payload
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
  load: function load(_ref2, contactData) {
    var _this = this;

    var commit = _ref2.commit;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var breadcrumbs, component, result;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              breadcrumbs = [];

              if (contactData && contactData.length > 0) {
                breadcrumbs = contactData;
              }

              if (_this.$router.currentRoute.matched.length > 0) {
                component = _this.$router.currentRoute.matched[0].instances["default"];

                if (!isUndefined(component) && !isUndefined(component.$options.breadcrumbs)) {
                  result = component.$options.breadcrumbs.call(component);
                  breadcrumbs = [].concat(_toConsumableArray(breadcrumbs), _toConsumableArray(result));
                }
              }

              commit('setItems', breadcrumbs);
              commit('setLoaded', true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};