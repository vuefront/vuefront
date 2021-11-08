import gql from "graphql-tag";
export const state = {
  country: {},
  entities: {}
};
export const getters = {
  get(state) {
    return state.country;
  },

  list(state) {
    return state.entities;
  }

};
export const mutations = {
  setCountry(state, payload) {
    state.country = payload;
  },

  setEntities(state, payload) {
    state.entities = payload;
  }

};
export const actions = {
  async list({
    commit
  }, {
    page,
    size
  }) {
    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          query ($page: Int, $size: Int) {
            countriesList(page: $page, size: $size) {
              content {
                id
                name
              }
              totalPages
              totalElements
              first
              last
              number
              numberOfElements
            }
          }
        `,
        variables: {
          page,
          size
        }
      });
      commit("setEntities", data.countriesList);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  },

  async get({
    commit,
    dispatch,
    rootGetters
  }, {
    id
  }) {
    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          query ($id: String) {
            country(id: $id) {
              id
              name
            }
          }
        `,
        variables: {
          id
        }
      });
      commit("setCountry", data.country);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  }

};
//# sourceMappingURL=country.mjs.map