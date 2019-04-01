<template>
  <ApolloQuery :query="require('~/types/graphql/modules/searchProduct.graphql')" :variables="{search:keyword}">
    <template slot-scope="{ result: { data }, isLoading }">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="data.searchProduct.content.length > 0" class="home-page__latest_products mb-5">
        <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Search products
        </div>
        <vf-products-grid :products="data.searchProduct.content"/>
      </div>
    </template>
  </ApolloQuery>
</template>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component
export default class extends Vue {

  get keyword() {
    return this.$route.params.slug ? this.$route.params.slug : ''
  }
}
</script>
