import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { isUndefined } from "lodash";
export var state = function () {
  return {
    items: null
  };
};
export var getters = {
  get: function get(state) {
    return state.items;
  }
};
export var mutations = {
  setItems: function setItems(state, payload) {
    state.items = payload;
  }
};
export var actions = {
  load: function () {
    var _load = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref, contactData) {
      var dispatch, rootGetters, commit, breadcrumbs, component, result;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, rootGetters = _ref.rootGetters, commit = _ref.commit;
              breadcrumbs = [];
              console.log(contactData); // if (contactData && contactData.length > 0) {
              //     breadcrumbs = contactData;
              // }

              console.log('eee');

              if (this.$router.currentRoute.matched.length > 0) {
                component = this.$router.currentRoute.matched[0].instances["default"];

                if (!isUndefined(component) && !isUndefined(component.$options.breadcrumbs)) {
                  result = component.$options.breadcrumbs.call(component); //

                  breadcrumbs = [].concat(_toConsumableArray(breadcrumbs), _toConsumableArray(result));
                }
              }

              commit('setItems', breadcrumbs);

            case 6:
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