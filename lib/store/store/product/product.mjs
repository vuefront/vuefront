import gql from "graphql-tag";
export const state = {
  entities: {},
  product: {},
  options: []
};
export const getters = {
  list(state) {
    return state.entities;
  },

  get(state) {
    return state.product;
  },

  options(state) {
    return state.options;
  }

};
export const mutations = {
  setEntities(state, products) {
    state.entities = products;
  },

  setProduct(state, product) {
    state.product = product;
    state.options = [];
  },

  setOptions(state, options) {
    state.options = options;
  }

};
export const actions = {
  async addReview({
    commit,
    dispatch,
    rootGetters
  }, reviewData) {
    await dispatch("apollo/mutate", {
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
      variables: reviewData
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setProduct", rootGetters["apollo/get"].addReview);
    }
  }

};
//# sourceMappingURL=product.mjs.map