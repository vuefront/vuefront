// import ZonesGql from './list.graphql'
// import ZoneGql from './get.graphql'
import gql from 'graphql-tag';
export const state = () => ({
  zone: false,
  entities: {
    content: []
  }
});
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
  async list({
    commit,
    dispatch,
    rootGetters
  }, zoneData) {
    await dispatch('apollo/query', {
      query: gql`query($page: Int, $size: Int, $country_id: String) {
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
    }, {
      root: true
    });

    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].zonesList);
    }
  },

  async get({
    commit,
    dispatch,
    rootGetters
  }, {
    id
  }) {
    await dispatch('apollo/query', {
      query: gql`query($id: String) {
          zone(id: $id) {
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

    if (!rootGetters['vuefront/error']) {
      commit('setZone', rootGetters['apollo/get'].zone);
    }
  }

};