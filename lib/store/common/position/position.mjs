export const state = () => ({
  positions: {},
  modules: {},
  layouts: {},
  path: "",
  params: {
    url: ""
  }
});
export const mutations = {
  setPosition(state, {
    name,
    route,
    status
  }) {
    if (typeof state.positions[route] === "undefined") {
      state.positions[route] = {};
    }

    state.positions[route][name] = status;
  },

  setLayout(state, {
    route,
    layout
  }) {
    state.layouts[route] = layout;
  },

  setModule(state, {
    name,
    route,
    list
  }) {
    if (typeof state.modules[route] === "undefined") {
      state.modules[route] = {};
    }

    state.modules[route][name] = list;
  },

  setRoute(state, payload) {
    state.path = payload;
  },

  setParams(state, payload) {
    state.params = payload;
  }

};
export const getters = {
  modules(state, rootGetters) {
    return name => {
      if (typeof state.modules[rootGetters.currentRoute] === "undefined") {
        return null;
      }

      if (typeof state.modules[rootGetters.currentRoute][name] === "undefined") {
        return null;
      }

      return state.modules[rootGetters.currentRoute][name];
    };
  },

  layout(state, rootGetters) {
    if (typeof state.layouts[rootGetters.currentRoute] === "undefined") {
      return null;
    }

    return state.layouts[rootGetters.currentRoute];
  },

  position(state, rootGetters) {
    return name => {
      if (typeof state.positions[rootGetters.currentRoute] === "undefined") {
        return null;
      }

      if (typeof state.positions[rootGetters.currentRoute][name] === "undefined") {
        return null;
      }

      return state.positions[rootGetters.currentRoute][name];
    };
  },

  currentRoute(state) {
    var _state$params;

    let currentRoute = state.path !== "" ? state.path : "/";

    if (state != null && (_state$params = state.params) != null && _state$params.url && state.params.url !== "") {
      currentRoute = state.params.url;
    }

    currentRoute = currentRoute.replace("/amp", "");
    currentRoute = currentRoute !== "" ? currentRoute : "/";
    return currentRoute;
  }

};
export const actions = {
  loadModules({
    commit,
    getters
  }, {
    position
  }) {
    let result = [];

    if (getters.modules(position)) {
      return;
    }

    for (const route in this.$vuefront.layouts) {
      const layout = this.$vuefront.layouts[route];
      let regexRoute = route.replace("*", ".*");
      regexRoute = regexRoute.replace("//", "\\//");
      const regex = new RegExp("^" + regexRoute + "$", "i");

      if (regex.test(getters.currentRoute)) {
        let extensions = [];

        if (typeof layout[position] !== "undefined") {
          extensions = layout[position];
        }

        if (typeof layout.extensions !== "undefined" && typeof layout.extensions[position] !== "undefined") {
          extensions = layout.extensions[position];
        }

        for (const key in extensions) {
          if (typeof extensions[key] === "string") {
            if (typeof this.$vuefront.extensions[extensions[key]] !== "undefined") {
              result = [...result, {
                component: extensions[key],
                props: {}
              }];
            }
          } else if (typeof this.$vuefront.extensions[extensions[key][0]] !== "undefined") {
            result = [...result, {
              component: extensions[key][0],
              props: extensions[key][1]
            }];
          }
        }
      }
    }

    commit("setModule", {
      name: position,
      list: result,
      route: getters.currentRoute
    });
  }

};
//# sourceMappingURL=position.mjs.map