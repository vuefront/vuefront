import {ProductState, Product, Pagination, Dictionary} from '~/types'
import {MutationTree, GetterTree, ActionTree} from 'vuex'
import * as reviewAddGql from '~/types/graphql/store/review/addReview.graphql'

export const state = (): ProductState => ({
  entities: {},
  product: {}
})

export const getters: GetterTree<ProductState, ProductState> = {
  list(state: ProductState): Dictionary<Pagination<Product>> {
    return state.entities
  },
  get(state: ProductState): Dictionary<Product> {
    return state.product
  }
}

export const mutations: MutationTree<ProductState> = {
  setEntities(state: ProductState, products: Dictionary<Pagination<Product>>): void {
    state.entities = products
  },
  setProduct(state: ProductState, product: Dictionary<Product>) {
    state.product = product
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
      commit('setProduct', rootGetters['apollo/get'].addReview)
    }
  }
}