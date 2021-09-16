import gql from "graphql-tag";
import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Product } from "vuefront-api";
export type State = {
  wishlist: Product[];
};
export const state: State = {
  wishlist: [],
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.wishlist;
  },
};

export const mutations: MutationTree<State> = {
  setWishlist(state, wishlist) {
    state.wishlist = wishlist;
  },
};

export const actions: ActionTree<State, RootState> = {
  async add({ commit, dispatch, rootGetters }, { product }) {
    await dispatch(
      "apollo/mutate",
      {
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
          id: Number(product.id),
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setWishlist", rootGetters["apollo/get"].addToWishlist);
      commit(
        "notification/add",
        product.name +
          this.$i18n.global.t(
            "elements.store.productThumb.wishlistNotificationText"
          ),
        { root: true }
      );
    }
  },
  async remove({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      "apollo/mutate",
      {
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
          id,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setWishlist", rootGetters["apollo/get"].removeWishlist);
    }
  },
};
