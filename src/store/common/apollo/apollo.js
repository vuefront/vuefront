import omitDeepLodash from "omit-deep-lodash";
import Axios from "axios";
import FormData from "form-data";

export const state = {
  data: {},
  prefetchData: {},
};

export const getters = {
  get(state) {
    return state.data;
  },
  prefetchData(state) {
    return state.prefetchData;
  },
};

export const mutations = {
  setData(state, payload) {
    state.data = { ...state.data, ...payload.data };
  },
  setPrefetchData(state, { key, data }) {
    state.prefetchData[key] = data;
  },
};

export const actions = {
  async query({ commit }, options) {
    try {
      const variables = omitDeepLodash(options.variables, "__typename");
      let res = await this.$vfapollo.query({ ...options, variables });

      res = omitDeepLodash(res, "__typename");
      commit("vuefront/setError", false, { root: true });
      commit("setData", res);
    } catch (e) {
      commit("vuefront/setError", e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true,
      });
    }
  },
  async mutate({ commit }, options) {
    try {
      const variables = omitDeepLodash(options.variables, "__typename");
      const res = await this.$vfapollo.mutate({ ...options, variables });
      if (!res.errors) {
        commit("vuefront/setError", false, { root: true });
        commit("setData", res);
      } else {
        commit("vuefront/setError", res.errors, {
          root: true,
        });
      }
      this.$vfapollo.clearStore();
    } catch (e) {
      commit("vuefront/setError", e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true,
      });
    }
  },
  async upload({ commit }, options) {
    try {
      const variables = omitDeepLodash(options.variables, "__typename");

      const o = {
        query: options.mutation.loc.source.body,
        variables,
      };

      const map = {
        0: "file",
      };

      let i = 0;
      const fd = new FormData();
      fd.append("operations", JSON.stringify(o));
      for (const key in variables) {
        if (
          typeof variables[key] === "object" &&
          variables[key] instanceof File
        ) {
          map[i] = key;
          fd.append(i, variables[key]);
          i++;
        }
      }

      fd.append("map", JSON.stringify(map));
      const axios = Axios.create({
        withCredentials: true,
      });
      const { data } = await axios.post(this.$vuefront.baseURL, fd);

      if (!data.errors) {
        commit("vuefront/setError", false, { root: true });
        commit("setData", data);
      } else {
        commit("vuefront/setError", data.errors, {
          root: true,
        });
      }
    } catch (e) {
      commit("vuefront/setError", e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true,
      });
    }
  },
};
