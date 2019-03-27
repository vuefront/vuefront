import {CartState, Dictionary, Cart} from '~/types'
import {MutationTree, GetterTree, ActionTree} from 'vuex'
import * as addToCartGraphql from '~/types/graphql/store/cart/addToCart.graphql'
import * as updateCartGraphql from '~/types/graphql/store/cart/updateCart.graphql'
import * as removeCartGraphql from '~/types/graphql/store/cart/removeCart.graphql'
import * as cartGetGql from '~/types/graphql/store/cart/get.graphql'

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
  async load({commit, dispatch, rootGetters}) {
    await dispatch('apollo/query', {
      query: cartGetGql
    }, {root: true})

    if (!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].cart)
    }
  },
  async add({commit, dispatch, rootGetters}, {id, quantity, options}) {
    await dispatch('apollo/mutate', {
      mutation: addToCartGraphql,
      variables: {
        id,
        quantity,
        options
      }
    }, {
      root: true
    })

    if (!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].addToCart)
    }
  },
  async update({commit, dispatch, rootGetters}, {key, quantity}) {
    await dispatch('apollo/mutate', {
      mutation: updateCartGraphql,
      variables: {
        key,
        quantity
      }
    }, {
      root: true
    })

    if (!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].updateCart)
    }
  },
  async remove({commit, dispatch, rootGetters}, {key}) {
    await dispatch('apollo/mutate', {
      mutation: removeCartGraphql,
      variables: {
        key
      }
    }, {
      root: true
    })

    if (!rootGetters['error']) {
      commit('setCart', rootGetters['apollo/get'].removeCart)
    }
  }
}
