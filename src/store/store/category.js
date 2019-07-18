import categoryMenuGql from 'vuefront/graphql/store/category/menu.graphql'

export const state = () => ({
  menuItems: [],
  category: {
    name: '',
    description: '',
  },
  mode: 'grid',
})

export const getters = {
  menu(state) {
    return state.menuItems
  },
  get(state) {
    return state.category
  },
  mode(state) {
    return state.mode
  },
}

export const mutations = {
  setCategoryMenu(state, categories) {
    state.menuItems = categories.content
  },
  setCategory(state, category) {
    state.category = category
  },
  setMode(state, payload) {
    state.mode = payload
    this.$cookies.set('mode', payload)
  },
}

export const actions = {
  async loadMenu({ dispatch, commit, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: categoryMenuGql,
        variables: {
          url: '/store/category/_id',
        },
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      const { categoriesMenu } = rootGetters['apollo/get']
      commit('setCategoryMenu', categoriesMenu)
    }
  },
}
