import categoryMenuGql from 'vuefront/graphql/blog/category/menu.graphql'
export const state = () => ({
  menuItems: [],
  category: {}
})

export const getters = {
  menu(state) {
    return state.menuItems
  },
  get(state) {
    return state.category
  }
}

export const mutations = {
  setCategoryBlogMenu(state, categories) {
    state.menuItems = categories.content
  },
  setCategory(state, category) {
    state.category = category
  }
}

export const actions = {
  async loadMenu({ dispatch, commit, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: categoryMenuGql,
        variables: {
            url: '/blog/category/_id'
        }
      },
      { root: true }
    )
    if (!rootGetters['vuefront/error']) {
      const { categoriesMenu } = rootGetters['apollo/get']
      commit('setCategoryBlogMenu', categoriesMenu)
    }
  }
}
