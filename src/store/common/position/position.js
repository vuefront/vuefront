import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";
import isString from "lodash/isString";
import isNull from "lodash/isNull";
import Vue from "vue";
export const state = () => ({
  positions: {},
  modules: {},
  layouts: {},
  path: "",
  params: {
    url: "",
  },
});

export const mutations = {
  setPosition(state, { name, route, status }) {
    if (isUndefined(state.positions[route])) {
      Vue.set(state.positions, route, {});
    }
    Vue.set(state.positions[route], name, status);
  },
  setLayout(state, { route, layout }) {
    Vue.set(state.layouts, route, layout);
  },
  setModule(state, { name, route, list }) {
    if (isUndefined(state.modules[route])) {
      Vue.set(state.modules, route, {});
    }
    Vue.set(state.modules[route], name, list);
  },
  setRoute(state, payload) {
    state.path = payload;
  },
  setParams(state, payload) {
    state.params = payload;
  },
};

export const getters = {
  modules(state, rootGetters) {
    return (name) => {
      if (isUndefined(state.modules[rootGetters.currentRoute])) {
        return null;
      }
      if (isUndefined(state.modules[rootGetters.currentRoute][name])) {
        return null;
      }
      return state.modules[rootGetters.currentRoute][name];
    };
  },
  layout(state, rootGetters) {
    if (isUndefined(state.layouts[rootGetters.currentRoute])) {
      return null;
    }
    return state.layouts[rootGetters.currentRoute];
  },
  position(state, rootGetters) {
    return (name) => {
      if (isUndefined(state.positions[rootGetters.currentRoute])) {
        return null;
      }
      if (isUndefined(state.positions[rootGetters.currentRoute][name])) {
        return null;
      }
      return state.positions[rootGetters.currentRoute][name];
    };
  },
  currentRoute(state) {
    let currentRoute = state.path !== "" ? state.path : "/";
    if (!isEmpty(state.params.url)) {
      currentRoute = state.params.url;
    }

    currentRoute = currentRoute.replace("/amp", "");

    currentRoute = currentRoute !== "" ? currentRoute : "/";

    return currentRoute;
  },
  error(state) {
    return state.error;
  },
};

export const actions = {
  loadModules({ commit, getters }, { position }) {
    let result = [];

    if (!isNull(getters.modules(position))) {
      return;
    }

    for (const route in this.app.$vuefront.layouts) {
      const layout = this.app.$vuefront.layouts[route];
      let regexRoute = route.replace("*", ".*");
      regexRoute = regexRoute.replace("//", "\\//");
      const regex = new RegExp("^" + regexRoute + "$", "i");

      if (regex.test(getters.currentRoute)) {
        let extensions = [];
        if (!isUndefined(layout[position])) {
          extensions = layout[position];
        }
        if (
          !isUndefined(layout.extensions) &&
          !isUndefined(layout.extensions[position])
        ) {
          extensions = layout.extensions[position];
        }
        for (const key in extensions) {
          if (isString(extensions[key])) {
            if (!isUndefined(this.app.$vuefront.extensions[extensions[key]])) {
              result = [
                ...result,
                {
                  component: extensions[key],
                  props: {},
                },
              ];
            }
          } else if (
            !isUndefined(this.app.$vuefront.extensions[extensions[key][0]])
          ) {
            result = [
              ...result,
              {
                component: extensions[key][0],
                props: extensions[key][1],
              },
            ];
          }
        }
      }
    }

    commit("setModule", {
      name: position,
      list: result,
      route: getters.currentRoute,
    });
  },
};
