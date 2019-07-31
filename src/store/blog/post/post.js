import reviewAddGql from './addReview.graphql'
export const state = () => ({
  entities: {},
  post: {}
})

export const getters = {
  list(state) {
    return state.entities
  },
  get(state) {
    return state.post
  }
}

export const mutations = {
  setEntities(state, posts) {
    state.entities = posts
  },
  setPost(state, post) {
    state.post = post
  }
}

export const actions = {
  async addReview({ commit, dispatch, rootGetters }, reviewData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: reviewAddGql,
        variables: reviewData
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setPost', rootGetters['apollo/get'].addBlogPostReview)
    }
  }
}
