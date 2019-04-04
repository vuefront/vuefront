<template>
  <div class="home-page__latest_products mb-5">
    <div
      class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium"
    >Special products</div>
    <ApolloQuery :query="require('~/graphql/modules/specialProduct.graphql')">
      <template slot-scope="{ result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <vf-products-grid v-else :products="data.specialProducts.content"/>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import { ApolloQuery } from "vue-apollo";

export default {
  name: "vfDefaultModulesStoreSpecialProduct",
  components: {
    ApolloQuery
  }
};
</script>

