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
    if (categories) {
      state.entities = categories.content;
    }
  },
};

export const actions = {
  async load({ commit }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          query($url: String) {
            categoriesMenu: categoriesBlogList(parent: 0, size: -1) {
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
          url: "/blog/category/_id",
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
