import categoryMenuGql from './blog.graphql'

export const state = () => ({
  entities: []
})

export const getters = {
  get(state) {
    return state.entities
  }
}

export const mutations = {
  setEntities(state, categories) {
    if (categories) {
      state.entities = categories.content
    }
  }
}

export const actions = {
  async load({dispatch, commit, rootGetters}) {
    await dispatch(
      'apollo/query',
      {
        query: categoryMenuGql,
        variables: {
          url: '/blog/category/_id'
        }
      },
      {root: true}
    )
    if (!rootGetters['vuefront/error']) {
      const {categoriesMenu} = rootGetters['apollo/get']
      commit('setEntities', categoriesMenu)
    }
  }
}
