// import categoryMenuGql from './query.graphql'
import gql from "graphql-tag";

export const state = () => ({
  entities: [],
});

export const getters = {
  get(state) {
    return state.entities;
  },
};

export const mutations = {
  setEntities(state, categories) {
    state.entities = categories.content;
  },
};

export const actions = {
  async load({ dispatch, commit, rootGetters }) {
    await dispatch(
      "apollo/query",
      {
        query: gql`
          query($url: String) {
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
      },
      { root: true }
    );

    if (!rootGetters["vuefront/error"]) {
      const { categoriesMenu } = rootGetters["apollo/get"];
      if (categoriesMenu) {
        commit("setEntities", categoriesMenu);
      }
    }
  },
};