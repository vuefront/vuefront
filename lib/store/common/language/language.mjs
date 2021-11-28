import { find } from "lodash";
import gql from "graphql-tag";
export const state = {
  language: [],
  locale: "en-gb"
};
export const getters = {
  get(state) {
    return state.language;
  },

  locale(state) {
    return state.locale;
  }

};
export const mutations = {
  setLanguage(state, language) {
    state.language = language;
  },

  setLocal(state, locale) {
    state.locale = locale;
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
            language {
              name
              image
              code
              active
            }
          }
        `
      });
      commit("setLanguage", data.language);
      const active = find(data.language, {
        active: true
      });

      if (active) {
        commit("setLocal", active.code);
      }
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
            editLanguage(code: $code) {
              name
              image
              code
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
      commit("setLanguage", rootGetters["apollo/get"].editLanguage);
    }
  }

};
//# sourceMappingURL=language.mjs.map