import gql from "graphql-tag";
export const state = () => ({
  country: false,
  entities: []
});
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
    commit,
    dispatch,
    rootGetters
  }, {
    page,
    size
  }) {
    await dispatch("apollo/query", {
      query: gql`
          query($page: Int, $size: Int) {
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
    }, {
      root: true
    });

    if (!rootGetters["vuefront/error"]) {
      commit("setEntities", rootGetters["apollo/get"].countriesList);
    }
  },

  async get({
    commit,
    dispatch,
    rootGetters
  }, {
    id
  }) {
    await dispatch("apollo/query", {
      query: gql`
          query($id: String) {
            country(id: $id) {
              id
              name
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
      commit("setCountry", rootGetters["apollo/get"].country);
    }
  }

};