<template>
  <vf-apollo
    :query="require('~/graphql/modules/searchProduct.graphql')"
    :variables="{search:keyword}"
  >
    <template v-slot:default="{data}">
      <div v-if="data.searchProduct.content.length > 0" class="home-page__latest_products mb-5">
        <div class="home-page__latest_products_title text-sm-center mb-5 h6">Search products</div>
        <vf-products-grid :products="data.searchProduct.content"/>
      </div>
    </template>
  </vf-apollo>
</template>
<script>
export default {
  computed: {
    keyword() {
      return this.$route.params.slug ? this.$route.params.slug : "";
    }
  }
};
</script>
