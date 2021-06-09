// import pageMenuGql from "./page.graphql";
import gql from "graphql-tag";
export const state = () => ({
  entities: []
});
export const getters = {
  get(state) {
    return state.entities;
  }

};
export const mutations = {
  setEntities(state, pages) {
    state.entities = [];

    for (const key in pages.content) {
      state.entities = [...state.entities, {
        title: pages.content[key].title,
        to: pages.content[key].keyword !== "" ? `/${pages.content[key].keyword}` : `/common/page/${pages.content[key].id}`
      }];
    }
  }

};
export const actions = {
  async load({
    commit
  }) {
    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          {
            pagesList(page: 1, size: -1) {
              content {
                id
                title
                url(url: "/page/_id")
              }
            }
          }
        `,
        variables: {
          url: "/common/page/_id"
        }
      });
      commit("setEntities", data.pagesList);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true
      });
    }
  }

};