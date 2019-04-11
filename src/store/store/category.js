import { flatToTree } from '~/utils/flatToTree.js'
import keys from 'lodash/keys'
import categoryMenuGql from '~/graphql/store/category/menu.graphql'

export const state = {
  menuItems: [],
  category: {},
  mode: 'grid'
}

export const getters = {
  menu(state) {
    return state.menuItems
  },
  get(state) {
    return state.category
  },
  mode(state) {
    return state.mode
  }
}

export const mutations = {
  setCategoryMenu(state, categories) {
    let result = []

    for (const key of keys(categories.content)) {
      const categoryInfo = categories.content[key]
      result = [
        ...result,
        {
          id: Number(categoryInfo.id),
          parent_id: Number(categoryInfo.parent_id),
          title: categoryInfo.name,
          to: `/store/category/${categoryInfo.id}`
        }
      ]
    }

    result = flatToTree(result, { parentId: 'parent_id' })

    state.menuItems = result
  },
  setCategory(state, category) {
    state.category = category
  },
  setMode(state, payload) {
    state.mode = payload
    this.$cookies.set('mode', payload)
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
      commit('setCategoryMenu', categoriesMenu)
    }
  }
}
