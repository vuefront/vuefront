<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Latest products
    </div>
    <ApolloQuery :query="require('~/types/graphql/modules/latestProduct.graphql')">
      <template slot-scope="{ result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <vf-products-grid v-else :products="data.latestProducts.content"/>
      </template>
    </ApolloQuery>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
}
</script>
