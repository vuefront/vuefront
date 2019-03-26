import {CartState, Dictionary, Cart} from '~/types'
import {MutationTree, GetterTree, ActionTree} from 'vuex'
import * as addToCartGraphql from '~/types/graphql/store/cart/addToCart.graphql'
import * as updateCartGraphql from '~/types/graphql/store/cart/updateCart.graphql'

export const state = (): CartState => ({
  cart: {}
})

export const getters: GetterTree<CartState, CartState> = {
  get(state: CartState): Dictionary<Cart> {
    return state.cart
  }
}

export const mutations: MutationTree<CartState> = {
  setCart(state: CartState, cart: Dictionary<Cart>): void {
    state.cart = cart
  }
}

export const actions: ActionTree<CartState, CartState> = {
  async addToCart({commit, dispatch, rootGetters}, {id, quantity}) {
    await dispatch('apollo/mutate', {
      mutation: addToCartGraphql,
      variables: {
        id,
        quantity
      }
    }, {
      root: true
    })

    if(!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].addToCart)
    }
  },
  async updateCart({commit, dispatch, rootGetters}, {key, quantity}) {
    await dispatch('apollo/mutate', {
      mutation: updateCartGraphql,
      variables: {
        key,
        quantity
      }
    }, {
      root: true
    })

    if(!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].updateCart)
    }
  }
}
