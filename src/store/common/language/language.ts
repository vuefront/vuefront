import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Language } from "vuefront-api";
import { find } from "lodash";
import gql from "graphql-tag";

export type State = {
  language: Language[];
  locale: string;
};

export const state = {
  language: [],
  locale: "en-gb",
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.language;
  },
  locale(state) {
    return state.locale;
  },
};

export const mutations: MutationTree<State> = {
  setLanguage(state, language) {
    state.language = language;
  },
  setLocal(state, locale) {
    state.locale = locale;
  },
};

export const actions: ActionTree<State, RootState> = {
  async load({ commit }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          {
            language {
              name
              image
              code
              active
            }
          }
        `,
      });

      commit("setLanguage", data.language);
      const active = find(data.language, {
        active: true,
      });

      if (active) {
        commit("setLocal", active.code);
      }
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
  async edit({ commit, dispatch, rootGetters }, { code }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($code: String) {
            editLanguage(code: $code) {
              name
              image
              code
              active
            }
          }
        `,
        variables: {
          code,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setLanguage", rootGetters["apollo/get"].editLanguage);
    }
  },
};
