<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Featured products
    </div>
    <ApolloQuery :query="require('~/types/graphql/modules/featuredProduct.graphql')" :variables="{ids}">
      <template slot-scope="{ result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <vf-products-grid v-else :products="data.featuredProducts.content"/>
      </template>
    </ApolloQuery>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({default: []})
  ids!: number[]
}
</script>