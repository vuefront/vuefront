import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { ProductResult, Product, ProductOption } from "vuefront-api";
import gql from "graphql-tag";

export type State = {
  entities: ProductResult;
  product: Product;
  options: ProductOption[];
};

export const state: State = {
  entities: {},
  product: {},
  options: [],
};

export const getters: GetterTree<State, RootState> = {
  list(state) {
    return state.entities;
  },
  get(state) {
    return state.product;
  },
  options(state) {
    return state.options;
  },
};

export const mutations: MutationTree<State> = {
  setEntities(state, products) {
    state.entities = products;
  },
  setProduct(state, product) {
    state.product = product;
    state.options = [];
  },
  setOptions(state, options) {
    state.options = options;
  },
};

export const actions: ActionTree<State, RootState> = {
  async addReview({ commit, dispatch, rootGetters }, reviewData) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation (
            $id: String
            $content: String
            $author: String
            $rating: Float
            $limit: Int
            $productLimit: Int
          ) {
            addReview(
              id: $id
              content: $content
              author: $author
              rating: $rating
            ) {
              id
              name
              shortDescription
              description
              model
              stock
              price
              special
              image
              reviews {
                author
                author_email
                content
                created_at
                rating
              }
              options {
                id
                name
                type
                values {
                  id
                  name
                }
              }
              imageLazy
              imageBig
              rating
              images(limit: $limit) {
                image
                imageLazy
                imageBig
              }
              attributes {
                name
                options
              }
              products(limit: $productLimit) {
                id
                image
                imageLazy
                description
                shortDescription
                price
                name
              }
            }
          }
        `,
        variables: reviewData,
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setProduct", rootGetters["apollo/get"].addReview);
    }
  },
};
