<template>
  <div class="home-page__latest_products mb-5">
    <div
      class="home-page__latest_products_title text-sm-center mb-5 h6"
    >Featured products</div>
    <ApolloQuery :query="require('~/graphql/modules/featuredProduct.graphql')" :variables="{ids}">
      <template slot-scope="{ result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <vf-products-grid v-else :products="data.featuredProducts.content"/>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import { ApolloQuery } from "vue-apollo";
export default {
  components: {
    ApolloQuery
  },
  props: {
    ids: {
      type: Array,
      default: []
    }
  }
};
</script>
