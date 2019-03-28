<template>
  <section class="home-page">

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
