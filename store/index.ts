import {RootState} from "~/types";
import {MutationTree, ActionTree, GetterTree} from "vuex";

export const state = (): RootState => ({
  error: false
})

export const mutations: MutationTree<RootState> = {
  setError(state: RootState, payload: string) {
    state.error = payload
  }
}

export const getters: GetterTree<RootState, RootState> = {
  error(state: RootState): string | boolean {
    return state.error
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtClientInit({dispatch, commit, rootGetters}) {
    await dispatch('store/cart/load')
  },
  async nuxtServerInit({dispatch, commit, rootGetters}) {
    await dispatch('store/category/loadMenu')
    await commit('menu/addEntities', rootGetters['store/category/menu'])

    await dispatch('blog/category/loadMenu')
    await commit('menu/addEntities', [
      {

        'title': 'Blog',
        'to': '/blog/category',
        'children': rootGetters['blog/category/menu']
      }
    ])
  }
}
