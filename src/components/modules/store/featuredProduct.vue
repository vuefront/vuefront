<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-sm-center mb-5 h6">Featured products</div>
    <vf-apollo
      v-slot="{data}"
      :query="require('~/graphql/modules/featuredProduct.graphql')"
      :variables="{ids}"
    >
      <vf-products-grid :products="data.featuredProducts.content"/>
    </vf-apollo>
  </div>
</template>
<script>
export default {
  props: {
    ids: {
      type: Array,
      default: []
    }
  }
};
</script>
