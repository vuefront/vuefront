import editLanguageGraphql from '~/graphql/common/language/edit.graphql'
import languageGetGql from '~/graphql/common/language/get.graphql'
import find from 'lodash/find'

export const state = {
  language: {},
  locale: 'en-gb'
}

export const getters = {
  get(state) {
    return state.language
  },
  locale(state) {
    return state.locale
  }
}

export const mutations = {
  setLanguage(state, language) {
    state.language = language
  },
  setLocal(state, locale) {
    state.locale = locale
  }
}

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: languageGetGql
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setLanguage', rootGetters['apollo/get'].language)
      const active = find(rootGetters['apollo/get'].language, {active: true})
      commit('setLocal', active.code)
    }
  },
  async edit({ commit, dispatch, rootGetters }, { code }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: editLanguageGraphql,
        variables: {
          code
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setLanguage', rootGetters['apollo/get'].editLanguage)
    }
  }
}
