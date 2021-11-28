import gql from "graphql-tag";
export const state = {
  wishlist: []
};
export const getters = {
  get(state) {
    return state.wishlist;
  }

};
export const mutations = {
  setWishlist(state, wishlist) {
    state.wishlist = wishlist;
  }

};
export const actions = {
  async add(_ref, _ref2) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref;
    let {
      product
    } = _ref2;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($id: Int) {
            addToWishlist(id: $id) {
              id
              name
              model
              price
              image
              imageLazy
              url(url: "/store/product/_id")
              extra {
                name
                value
              }
              manufacturer {
                id
                name
                url(url: "/store/manufacturer/_id")
              }
            }
          }
        `,
      variables: {
        id: Number(product.id)
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setWishlist", rootGetters["apollo/get"].addToWishlist);
      commit("notification/add", product.name + this.$i18n.global.t("elements.store.productThumb.wishlistNotificationText"), {
        root: true
      });
    }
  },

  async remove(_ref3, _ref4) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref3;
    let {
      id
    } = _ref4;
    await dispatch("apollo/mutate", {
      mutation: gql`
          mutation ($id: String) {
            removeWishlist(id: $id) {
              id
              name
              model
              price
              image
              imageLazy
              url(url: "/store/product/_id")
              extra {
                name
                value
              }
              manufacturer {
                id
                name
                url(url: "/store/manufacturer/_id")
              }
            }
          }
        `,
      variables: {
        id
      }
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setWishlist", rootGetters["apollo/get"].removeWishlist);
    }
  }

};
//# sourceMappingURL=wishlist.mjs.map