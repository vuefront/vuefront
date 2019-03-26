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

  async fetch({store, route, app}) {
    const page = route.query.page ? Number(route.query.page) : 1
    const client = app.apolloProvider.defaultClient
    const res = await client
      .query({
        query: postListGql,
        variables: {page, size: 10, categoryId: 0}
      })
      .then(({data}) => data && data.postsList)
    store.commit('blog/post/setEntities', res)
  }
}
</script>
