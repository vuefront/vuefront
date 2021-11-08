import omitDeepLodash from "omit-deep-lodash";
//@ts-ignore
import { axios as adapterAxios } from "@bundled-es-modules/axios";
import { MutationTree, GetterTree, ActionTree } from "vuex";
import {} from "vuefront-api";
import { RootState } from "vuefront-store";
export type State = {
  data: any;
  prefetchData: { [key: string]: any };
};
export const state: State = {
  data: {},
  prefetchData: {},
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.data;
  },
  prefetchData(state) {
    return state.prefetchData;
  },
};

export const mutations: MutationTree<State> = {
  setData(state, payload) {
    state.data = { ...state.data, ...payload.data };
  },
  setPrefetchData(state, { key, data }) {
    state.prefetchData[key] = data;
  },
};

export const actions: ActionTree<State, RootState> = {
  async query({ commit }, options) {
    try {
      const variables = omitDeepLodash(options.variables, "__typename");
      let res = await this.$vfapollo.query({ ...options, variables });

      res = omitDeepLodash(res, "__typename");
      commit("vuefront/setError", false, { root: true });
      commit("setData", res);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
  async mutate({ commit }, options) {
    try {
      const variables = omitDeepLodash(options.variables, "__typename");
      const res = await (this.$vfapollo as any).mutate({
        ...options,
        variables,
      });
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
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
  async upload(
    { commit },
    options: { variables: { [key: string]: any }; mutation: any }
  ) {
    try {
      const variables: { [key: string]: any } = omitDeepLodash(
        options.variables,
        "__typename"
      );

      const o = {
        query: options.mutation.loc.source.body,
        variables,
      };

      const map: { [key: number]: string } = {
        0: "file",
      };

      let i: number = 0;
      const fd = new FormData();
      fd.append("operations", JSON.stringify(o));
      for (const key in variables) {
        if (
          typeof variables[key] === "object" &&
          variables[key] instanceof File
        ) {
          map[i] = key;
          fd.append(i.toString(), variables[key]);
          i++;
        }
      }

      fd.append("map", JSON.stringify(map));
      const axios = adapterAxios.create({
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
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
};
