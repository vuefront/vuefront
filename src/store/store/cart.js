import addToCartGraphql from 'vuefront/graphql/store/cart/addToCart.graphql'
import updateCartGraphql from 'vuefront/graphql/store/cart/updateCart.graphql'
import removeCartGraphql from 'vuefront/graphql/store/cart/removeCart.graphql'
import cartGetGql from 'vuefront/graphql/store/cart/get.graphql'

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
  async add(
    { commit, dispatch, rootGetters },
    { product, quantity = 1, options = [], redirect = false }
  ) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: addToCartGraphql,
        variables: {
          id: product.id,
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
      commit(
        'notification/add',
        product.name +
          this.app.i18n.t('elements.store.productThumb.notificationText'),
        { root: true }
      )
    } else {
      commit('notification/error', rootGetters['vuefront/error'].message, {
        root: true
      })

      if (redirect) {
        this.$router.push('/store/product/' + product.id)
      }
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
