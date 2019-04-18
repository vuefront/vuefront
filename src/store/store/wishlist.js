import addToWishlistGraphql from '~/graphql/store/wishlist/addToWishlist.graphql'
import removeWishlistGraphql from '~/graphql/store/wishlist/removeWishlist.graphql'
import wishlistGetGql from '~/graphql/store/wishlist/get.graphql'

export const state = {
  wishlist: {}
}

export const getters = {
  get(state) {
    return state.wishlist
  }
}

export const mutations = {
  setWishlist(state, wishlist) {
    state.wishlist = wishlist
  }
}

export const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: wishlistGetGql
      },
      { root: true }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setWishlist', rootGetters['apollo/get'].wishlist)
    }
  },
  async add({ commit, dispatch, rootGetters }, { id, quantity, options }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: addToWishlistGraphql,
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
      commit('setWishlist', rootGetters['apollo/get'].addToWishlist)
    }
  },
  async remove({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: removeWishlistGraphql,
        variables: {
          id
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setWishlist', rootGetters['apollo/get'].removeWishlist)
    }
  }
}
