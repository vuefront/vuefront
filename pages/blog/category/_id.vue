<template>
  <section class="blog-category">
    <vf-category-blog :category="category" class="mb-5"/>
    <vf-posts-grid :posts="posts.content"/>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import categoryPageGql from '~/types/graphql/blog/category/page.graphql'
import {Pagination, Post, CategoryBlog} from "~/types";

@Component({
  head() {
    return {
      title: (this as any).category.name,
      meta: [
        {hid: 'description', name: 'description', content: (this as any).category.description}
      ]
    }
  },
  watchQuery: true
})
export default class extends Vue {
  @Getter('blog/post/list') posts!: Pagination<Post>
  @Getter('blog/category/get') category!: CategoryBlog

  async handleChangePage(page) {
    this.$router.push({
      path: '/blog/category/'+this.$route.params.id,
      query: {page}
    })
  }

  async asyncData({store, route, app, params}) {
    const page = route.query.page ? Number(route.query.page) : 1

    await store.dispatch('apollo/query', {
      query: categoryPageGql,
      variables: {page, size: 12, categoryId: Number(params.id)}
    })

    const {postsList, categoryBlog} = store.getters['apollo/get']

    store.commit('blog/post/setEntities', postsList)
    store.commit('blog/category/setCategory', categoryBlog)

    return {
      page,
      totalPages: postsList.totalPages
    }
  }
}
</script>
