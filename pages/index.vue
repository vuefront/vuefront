<template>
  <section class="home-page">
    <div class="home-page__latest_products mb-5">
      <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Latest products
      </div>
      <sf-products-grid :products="latestProducts.content"/>
    </div>
    <div class="home-page__latest_posts mb-5">
      <div class="home-page__latest_posts_title text-xs-center mb-5 subheading font-weight-medium">Latest posts
      </div>
      <sf-posts-grid :posts="latestPosts.content"/>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import homePageGql from '~/types/graphql/page/home.graphql'
import {Pagination, Product, Category} from "~/types";

@Component({
  head() {
    return {
      title: 'Purpose'
    }
  }
})
export default class extends Vue {
  async asyncData({store}) {
    await store.dispatch('apollo/query', {
      query: homePageGql
    })
    const {latestProducts, latestPosts} = store.getters['apollo/get']

    return {
      latestProducts,
      latestPosts
    }
  }
}
</script>
