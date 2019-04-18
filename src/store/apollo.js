import omitDeepLodash from 'omit-deep-lodash'

export const state = {
  data: {},
  prefetchData: {}
}

export const getters = {
  get(state) {
    return state.data
  },
  prefetchData(state) {
    return state.prefetchData
  }
}

export const mutations = {
  setData(state, payload) {
    state.data = payload.data
  },
  setPrefetchData(state, {key, data}) {
    state.prefetchData[key] = data
  }

}

export const actions = {
  async query({commit}, options) {
    try {
      const variables = omitDeepLodash(options.variables, '__typename')
      let res = await this.$vfapollo.query({...options, variables})

      res = omitDeepLodash(res, '__typename')
      commit('vuefront/setError', false, {root: true})
      commit('setData', res)
    } catch (e) {
      commit('vuefront/setError', e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true
      })
    }
  },
  async mutate({commit}, options) {
    try {
      const variables = omitDeepLodash(options.variables, '__typename')
      const res = await this.$vfapollo.mutate({...options, variables})

      commit('vuefront/setError', false, {root: true})
      commit('setData', res)
    } catch (e) {

      commit('vuefront/setError', e.graphQLErrors ? e.graphQLErrors[0] : e, {
        root: true
      })
    }
  }
}
