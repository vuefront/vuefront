import {ProductState, Product, Pagination, Dictionary} from '~/types'
import {MutationTree, GetterTree} from 'vuex'

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