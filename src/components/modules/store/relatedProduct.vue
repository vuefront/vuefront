<template>
  <vf-apollo
    v-if="id"
    v-slot="{data}"
    :query="require('~/graphql/modules/relatedProduct.graphql')"
    :variables="{id:id}"
  >
    <div v-if="data.relatedProducts.products.length > 0" class="home-page__latest_products mb-5">
      <div class="home-page__latest_products_title text-sm-center mb-5 h6">
        {{$t('modules.store.relatedProduct.textTitle')}}
      </div>
      <vf-products-grid :products="data.relatedProducts.products"/>
    </div>
  </vf-apollo>
</template>
<script>
export default {
  computed: {
    id() {
      return this.$route.params.id ? Number(this.$route.params.id) : false;
    }
  }
};
</script>
