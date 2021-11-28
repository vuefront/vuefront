import gql from "graphql-tag";
export const state = {
  currency: []
};
export const getters = {
  get(state) {
    return state.currency;
  }

};
export const mutations = {
  setCurrency(state, currency) {
    state.currency = currency;
  }

};
export const actions = {
  async load(_ref) {
    let {
      commit
    } = _ref;

    try {
      const {
        data
      } = await this.$vfapollo.query({
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
        `
      });
      commit("setCurrency", data.currency);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  },

  async edit(_ref2, _ref3) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref2;
    let {
      code
    } = _ref3;
    await dispatch("apollo/mutate", {
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
        code
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setCurrency", rootGetters["apollo/get"].editCurrency);
    }
  }

};
//# sourceMappingURL=currency.mjs.map