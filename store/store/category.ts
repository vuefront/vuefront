import {CategoryState, Category, MenuItem, Pagination, Dictionary} from '~/types'
import {MutationTree, GetterTree, ActionTree} from 'vuex'
import {flatToTree} from "~/utils/flatToTree"
import {keys} from 'lodash'
import categoryMenuGql from "~/types/graphql/store/category/menu.graphql";


export const state = (): CategoryState => ({
  menuItems: [],
  category: {}
})

export const getters: GetterTree<CategoryState, CategoryState> = {
  menu(state: CategoryState): MenuItem[] {
    return state.menuItems
  },
  get(state: CategoryState): Dictionary<Category> {
    return  state.category
  }
}

export const mutations: MutationTree<CategoryState> = {
  setCategoryMenu(state: CategoryState, categories: Pagination<Category>): void {
    let result: MenuItem[] = []

    for (const key of keys(categories.content)) {
      const categoryInfo: Category = categories.content[key]
      result = [...result, {
        id: Number(categoryInfo.id),
        parent_id: Number(categoryInfo.parent_id),
        title: categoryInfo.name,
        to: `/store/category/${categoryInfo.id}`
      }]
    }

    result = flatToTree(result, {parentId: 'parent_id'})

    state.menuItems = result
  },
  setCategory(state: CategoryState, category: Dictionary<Category>): void {
    state.category = category
  }
}

export const actions: ActionTree<CategoryState, CategoryState> = {
  async loadMenu({dispatch, commit, rootGetters}) {
    await dispatch('apollo/query', {
      query: categoryMenuGql, variables: {
        parent: 0
      }
    }, {root: true})

    if (!rootGetters['error']) {
      const {categoriesMenu} = rootGetters['apollo/get']
      commit('setCategoryMenu', categoriesMenu)
    }
  }
}