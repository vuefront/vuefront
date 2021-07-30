import gql from "graphql-tag";

export const state = {
  address: false,
  entities: [],
};

export const getters = {
  get(state) {
    return state.address;
  },
  list(state) {
    return state.entities;
  },
};

export const mutations = {
  setAddress(state, payload) {
    state.address = payload;
  },
  setEntities(state, payload) {
    state.entities = payload;
  },
};

export const actions = {
  async create({ commit, dispatch, rootGetters }, { address }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($address: AccountAddressInput) {
            accountAddAddress(address: $address) {
              id
              firstName
              lastName
              city
              company
              zipcode
              countryId
              address1
              address2
            }
          }
        `,
        variables: {
          address,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setAddress", rootGetters["apollo/get"].accountAddAddress);

      return true;
    }

    return false;
  },
  async edit({ commit, dispatch, rootGetters }, { id, address }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($id: String, $address: AccountAddressInput) {
            accountEditAddress(id: $id, address: $address) {
              id
              firstName
              lastName
              city
              company
              zipcode
              address1
              countryId
              address2
            }
          }
        `,
        variables: {
          id,
          address,
        },
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setAddress", rootGetters["apollo/get"].accountEditAddress);

      return true;
    }

    return false;
  },
  async remove({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($id: String) {
            accountRemoveAddress(id: $id, page: 1, size: -1) {
              id
              firstName
              lastName
              address1
              address2
              zoneId
              zone {
                id
                name
              }
              countryId
              country {
                id
                name
              }
              city
              company
              zipcode
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
      commit("setEntities", rootGetters["apollo/get"].accountRemoveAddress);
    }
  },
};
