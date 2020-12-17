// import editLanguageGraphql from './edit.graphql'
// import languageGetGql from './get.graphql'
import find from 'lodash/find';
import gql from 'graphql-tag';
export const state = () => ({
  language: [],
  locale: 'en-gb'
});
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
  async load({
    commit,
    dispatch,
    rootGetters
  }) {
    await dispatch('apollo/query', {
      query: gql`{
          language {
            name
            image
            code
            active
          }
        }`
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setLanguage', rootGetters['apollo/get'].language);
      const active = find(rootGetters['apollo/get'].language, {
        active: true
      });

      if (active) {
        commit('setLocal', active.code);
      }
    }
  },

  async edit({
    commit,
    dispatch,
    rootGetters
  }, {
    code
  }) {
    await dispatch('apollo/mutate', {
      mutation: gql`mutation($code: String) {
          editLanguage(code: $code) {
            name
            image
            code
            active
          }
        }`,
      variables: {
        code
      }
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setLanguage', rootGetters['apollo/get'].editLanguage);
    }
  }

};