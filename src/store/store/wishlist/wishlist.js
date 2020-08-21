// import addToWishlistGraphql from './add.graphql'
// import removeWishlistGraphql from './remove.graphql'
import gql from 'graphql-tag'

export const state = () => ({
  wishlist: {}
})

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
  async add({commit, dispatch, rootGetters}, {product}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: `mutation($id: Int) {
          addToWishlist(id: $id) {
            id
            name
            model
            price
            image
            imageLazy
          }
        }
        `,
        variables: {
          id: Number(product.id)
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setWishlist', rootGetters['apollo/get'].addToWishlist)
      commit(
        'notification/add',
        product.name +
        this.app.i18n.t(
          'elements.store.productThumb.wishlistNotificationText'
        ),
        {root: true}
      )
    }
  },
  async remove({commit, dispatch, rootGetters}, {id}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: `mutation($id: String) {
          removeWishlist(id: $id) {
            id
            name
            model
            price
            image
            imageLazy
          }
        }
        `,
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
