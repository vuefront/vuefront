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
  async list(_ref, _ref2) {
    let {
      commit
    } = _ref;
    let {
      page,
      size
    } = _ref2;

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

  async get(_ref3, _ref4) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref3;
    let {
      id
    } = _ref4;

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