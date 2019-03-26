<template>
  <section class="blog-category">
    <sf-posts-grid :posts="posts.content"/>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import postListGql from '~/types/graphql/blog/post/list.graphql'
import {Pagination, Post} from "~/types";

@Component
export default class extends Vue {
  @Getter('blog/post/list') posts!: Pagination<Post>

  async fetch({store, route, app, params}) {
    const page = route.query.page ? Number(route.query.page) : 1

    await store.dispatch('apollo/query', {
      query: postListGql,
      variables: {page, size: 10, categoryId: Number(params.id)}
    })

    const {postsList} = store.getters['apollo/get']

    store.commit('blog/post/setEntities', postsList)
  }
}
</script>
