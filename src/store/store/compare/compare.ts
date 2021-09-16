import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Product } from "vuefront-api";
import gql from "graphql-tag";
export type State = {
  compare: Product[];
};
export const state: State = {
  compare: [],
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.compare;
  },
};

export const mutations: MutationTree<State> = {
  setCompare(state, compare) {
    state.compare = compare;
  },
};

export const actions: ActionTree<State, RootState> = {
  async add({ commit, dispatch, rootGetters }, { product }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($id: Int) {
            addToCompare(id: $id) {
              id
              name
              shortDescription
              model
              price
              special
              stock
              image
              imageLazy
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
      commit("setCompare", rootGetters["apollo/get"].addToCompare);
      commit(
        "notification/add",
        product.name +
          this.$i18n.global.t(
            "elements.store.productThumb.compareNotificationText"
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
            removeCompare(id: $id) {
              id
              name
              shortDescription
              model
              price
              special
              stock
              image
              imageLazy
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
      commit("setCompare", rootGetters["apollo/get"].removeCompare);
    }
  },
};
