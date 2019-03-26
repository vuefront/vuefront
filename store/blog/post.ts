import { PostState, Post, Pagination, Dictionary } from '~/types'
import { MutationTree, GetterTree } from 'vuex'

export const state = (): PostState => ({
  entities: {},
  post: {}
})

export const getters: GetterTree<PostState, PostState> = {
  list(state: PostState): Dictionary<Pagination<Post>> {
    return state.entities
  }
}

export const mutations: MutationTree<PostState> = {
  setEntities(state: PostState, products: Dictionary<Pagination<Post>>): void {
    state.entities = products
  }
}