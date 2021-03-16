import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";
import isString from "lodash/isString";
import isNull from "lodash/isNull";
import Vue from "vue";
export const state = () => ({
  positions: {},
  modules: {},
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

      if (regex.test(getters.currentRoute) && !isUndefined(layout[position])) {
        for (const key in layout[position]) {
          if (isString(layout[position][key])) {
            if (
              !isUndefined(this.app.$vuefront.extensions[layout[position][key]])
            ) {
              result = [
                ...result,
                {
                  component: layout[position][key],
                  props: {},
                },
              ];
            }
          } else if (
            !isUndefined(
              this.app.$vuefront.extensions[layout[position][key][0]]
            )
          ) {
            result = [
              ...result,
              {
                component: layout[position][key][0],
                props: layout[position][key][1],
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
