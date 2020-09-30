import gql from 'graphql-tag'
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
        query: gql`query($url: String) {
          categoriesMenu: categoriesBlogList(parent: 0, size: -1) {
            content {
              id
              title: name
              to: url(url: $url)
              children: categories {
                id
                title: name
                to: url(url: $url)
                children: categories {
                  id
                  title: name
                  to: url(url: $url)
                }
              }
            }
          }
        }`,
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
