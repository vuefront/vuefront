import {PostState, Post, Pagination, Dictionary, ProductState} from '~/types'
import { MutationTree, GetterTree, ActionTree } from 'vuex'
import * as reviewAddGql from "~/types/graphql/blog/review/addReview.graphql";

export const state = (): PostState => ({
  entities: {},
  post: {}
})

export const getters: GetterTree<PostState, PostState> = {
  list(state: PostState): Dictionary<Pagination<Post>> {
    return state.entities
  },
  get(state: PostState): Dictionary<Post> {
    return state.post
  }
}

export const mutations: MutationTree<PostState> = {
  setEntities(state: PostState, posts: Dictionary<Pagination<Post>>): void {
    state.entities = posts
  },
  setPost(state: PostState, post: Dictionary<Post>): void {
    state.post = post
  }
}

export const actions: ActionTree<ProductState, ProductState> = {
  async addReview({commit, dispatch, rootGetters}, reviewData) {
    await dispatch('apollo/mutate', {
      mutation: reviewAddGql,
      variables: reviewData
    }, {
      root: true
    })

    if (!rootGetters['error']) {
      commit('setPost', rootGetters['apollo/get'].addBlogPostReview)
    }
  }
}