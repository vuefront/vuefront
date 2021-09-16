import { MutationTree, GetterTree, ActionTree } from "vuex";
import { Post, PostResult } from "vuefront-api";
import { RootState } from "vuefront-store";
import gql from "graphql-tag";
export type State = {
  post: Post;
  entities: PostResult;
};
export const state: State = {
  entities: {},
  post: {},
};

export const getters: GetterTree<State, RootState> = {
  list(state) {
    return state.entities;
  },
  get(state) {
    return state.post;
  },
};

export const mutations: MutationTree<State> = {
  setEntities(state, posts) {
    state.entities = posts;
  },
  setPost(state, post) {
    state.post = post;
  },
};

export const actions: ActionTree<State, RootState> = {
  async addReview({ commit, dispatch, rootGetters }, reviewData) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation (
            $id: String
            $content: String
            $author: String
            $rating: Float
          ) {
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
        variables: reviewData,
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit("setPost", rootGetters["apollo/get"].addBlogPostReview);
    }
  },
};
