import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Currency } from "vuefront-api";
import gql from "graphql-tag";

export type State = {
  currency: Currency[];
};

export const state: State = {
  currency: [],
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.currency;
  },
};

export const mutations: MutationTree<State> = {
  setCurrency(state, currency) {
    state.currency = currency;
  },
};

export const actions: ActionTree<State, RootState> = {
  async load({ commit }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          {
            currency {
              code
              symbol_left
              symbol_right
              title
              active
            }
          }
        `,
      });

      commit("setCurrency", data.currency);
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
            editCurrency(code: $code) {
              code
              symbol_left
              symbol_right
              title
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
      commit("setCurrency", rootGetters["apollo/get"].editCurrency);
    }
  },
};
