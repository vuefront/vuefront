import addToCartGraphql from '~/graphql/store/cart/addToCart.graphql'
import updateCartGraphql from '~/graphql/store/cart/updateCart.graphql'
import removeCartGraphql from '~/graphql/store/cart/removeCart.graphql'
import cartGetGql from '~/graphql/store/cart/get.graphql'

export const state = () => ({
  cart: {}
})

export const getters = {
  get(state) {
    return state.cart
  }
}

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
  }
}

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: cartGetGql
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCart', rootGetters['apollo/get'].cart)
    }
  },
  async add({ commit, dispatch, rootGetters }, { id, quantity, options }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: addToCartGraphql,
        variables: {
          id,
          quantity,
          options
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCart', rootGetters['apollo/get'].addToCart)
    }
  },
  async update({ commit, dispatch, rootGetters }, { key, quantity }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: updateCartGraphql,
        variables: {
          key,
          quantity
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCart', rootGetters['apollo/get'].updateCart)
    }
  },
  async remove({ commit, dispatch, rootGetters }, { key }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: removeCartGraphql,
        variables: {
          key
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setCart', rootGetters['apollo/get'].removeCart)
    }
  }
}
