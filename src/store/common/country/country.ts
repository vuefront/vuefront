import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Country, CountriesResult } from "vuefront-api";
import gql from "graphql-tag";
export type State = {
  country: Country;
  entities: CountriesResult;
};
export const state: State = {
  country: {},
  entities: {},
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.country;
  },
  list(state) {
    return state.entities;
  },
};

export const mutations: MutationTree<State> = {
  setCountry(state, payload) {
    state.country = payload;
  },
  setEntities(state, payload) {
    state.entities = payload;
  },
};

export const actions: ActionTree<State, RootState> = {
  async list({ commit }, { page, size }) {
    try {
      const { data } = await this.$vfapollo.query({
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
        variables: { page, size },
      });
      commit("setEntities", data.countriesList);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
  async get({ commit, dispatch, rootGetters }, { id }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          query ($id: String) {
            country(id: $id) {
              id
              name
            }
          }
        `,
        variables: { id },
      });
      commit("setCountry", data.country);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
};
