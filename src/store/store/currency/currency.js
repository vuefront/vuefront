// import editCurrencyGraphql from './edit.graphql'
// import currencyGetGql from './get.graphql'
import gql from "graphql-tag";
import Vue from "vue";

export const state = () => ({
  currency: [],
});

export const getters = {
  get(state) {
    return state.currency;
  },
};

export const mutations = {
  setCurrency(state, currency) {
    Vue.set(state, "currency", currency);
  },
};

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      "apollo/query",
      {
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
      },
      { root: true }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setCurrency", rootGetters["apollo/get"].currency);
    }
  },
  async edit({ commit, dispatch, rootGetters }, { code }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation($code: String) {
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
