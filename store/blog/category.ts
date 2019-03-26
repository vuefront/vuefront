import {CategoryBlogState, CategoryBlog, MenuItem, Pagination} from '~/types'
import {MutationTree, GetterTree, ActionTree} from 'vuex'
import {flatToTree} from "~/utils/flatToTree"
import {keys} from 'lodash'
import categoryMenuGql from "~/types/graphql/blog/category/menu.graphql";


export const state = (): CategoryBlogState => ({
  menuItems: []
})

export const getters: GetterTree<CategoryBlogState, CategoryBlogState> = {
  menu(state: CategoryBlogState): MenuItem[] {
    return state.menuItems
  }
}

export const mutations: MutationTree<CategoryBlogState> = {
  setCategoryBlogMenu(state: CategoryBlogState, categories: Pagination<CategoryBlog>): void {
    let result: MenuItem[] = []

    for (const key of keys(categories.content)) {
      const categoryInfo: CategoryBlog = categories.content[key]
      result = [...result, {
        id: Number(categoryInfo.id),
        parent_id: Number(categoryInfo.parent_id),
        title: categoryInfo.name,
        to: `/blog/category/${categoryInfo.id}`
      }]
    }


    result = flatToTree(result, {parentId: 'parent_id'})

    state.menuItems = result
  }
}

export const actions: ActionTree<CategoryBlogState, CategoryBlogState> = {
  async loadMenu({dispatch, commit, rootGetters}) {
    await dispatch('apollo/query', {
      query: categoryMenuGql, variables: {
        parent: 0
      }
    }, {root: true})
    if (!rootGetters['error']) {
      const {categoriesMenu} = rootGetters['apollo/get']
      commit('setCategoryBlogMenu', categoriesMenu)
    }
  }
}