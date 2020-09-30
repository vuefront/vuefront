import gql from 'graphql-tag'
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
        mutation: gql`mutation($id: String, $content: String, $author: String, $rating: Float) {
          addBlogPostReview(
            id: $id
            content: $content
            author: $author
            rating: $rating
          ) {
            id
            title
            description
            image
            imageLazy
            datePublished
            rating
            categories {
              id
              name
              url(url: "/blog/category/_id")
            }
            prev {
              id
              name
              image
              imageLazy
              shortDescription
              keyword
            }
            next {
              id
              name
              image
              imageLazy
              shortDescription
              keyword
            }
            reviews {
              totalElements
              content {
                author
                author_email
                content
                created_at
                rating
              }
            }
          }
        }
        `,
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
