import pageMenuGql from "./page.graphql";

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
      state.entities = [
        ...state.entities,
        {
          title: pages.content[key].title,
          to:
            pages.content[key].keyword !== ""
              ? `/${pages.content[key].keyword}`
              : `/common/page/${pages.content[key].id}`
        }
      ];
    }
  }
};

export const actions = {
  async load({ dispatch, commit, rootGetters }) {
    await dispatch(
      "apollo/query",
      {
        query: pageMenuGql,
        variables: {
          url: "/common/page/_id"
        }
      },
      { root: true }
    );

    if (!rootGetters["vuefront/error"]) {
      const { pagesList } = rootGetters["apollo/get"];
      commit("setEntities", pagesList);
    }
  }
};
