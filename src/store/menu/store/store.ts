import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { IMenuLink } from "../../common/menu/menu";
import gql from "graphql-tag";
export type State = {
  entities: IMenuLink[];
};
export const state: State = {
  entities: [],
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.entities;
  },
};

export const mutations: MutationTree<State> = {
  setEntities(state, categories) {
    state.entities = categories.content;
  },
};

export const actions: ActionTree<State, RootState> = {
  async load({ commit }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          query ($url: String) {
            categoriesMenu: categoriesList(parent: 0, size: -1, top: true) {
              content {
                id
                title: name
                to: url(url: $url)
                children: categories {
                  id
                  title: name
                  to: url(url: $url)
                  children: categories {
                    id
                    title: name
                    to: url(url: $url)
                  }
                }
              }
            }
          }
        `,
        variables: {
          url: "/store/category/_id",
        },
      });

      commit("setEntities", data.categoriesMenu);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
};
