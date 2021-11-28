import gql from "graphql-tag";
export const state = {
  zone: {},
  entities: {
    content: []
  }
};
export const getters = {
  get(state) {
    return state.zone;
  },

  list(state) {
    return state.entities;
  }

};
export const mutations = {
  setZone(state, payload) {
    state.zone = payload;
  },

  setEntities(state, payload) {
    state.entities = payload;
  }

};
export const actions = {
  async list(_ref, zoneData) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref;

    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          query ($page: Int, $size: Int, $country_id: String) {
            zonesList(page: $page, size: $size, country_id: $country_id) {
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
        variables: zoneData
      });
      commit("setEntities", data.zonesList);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  },

  async get(_ref2, _ref3) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref2;
    let {
      id
    } = _ref3;

    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          query ($id: String) {
            zone(id: $id) {
              id
              name
            }
          }
        `,
        variables: {
          id
        }
      });
      commit("setZone", data.zone);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  }

};
//# sourceMappingURL=zone.mjs.map