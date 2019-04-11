import { flatToTree } from '~/utils/flatToTree.js'
import keys from 'lodash/keys'
import categoryMenuGql from '~/graphql/blog/category/menu.graphql'

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
    let result = []

    for (const key of keys(categories.content)) {
      const categoryInfo = categories.content[key]
      result = [
        ...result,
        {
          id: Number(categoryInfo.id),
          parent_id: Number(categoryInfo.parent_id),
          title: categoryInfo.name,
          to: `/blog/category/${categoryInfo.id}`
        }
      ]
    }

    result = flatToTree(result, { parentId: 'parent_id' })

    state.menuItems = result
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
          parent: 0
        }
      },
      { root: true }
    )
    if (!rootGetters['error']) {
      const { categoriesMenu } = rootGetters['apollo/get']
      commit('setCategoryBlogMenu', categoriesMenu)
    }
  }
}
