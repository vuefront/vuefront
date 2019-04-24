<template>
  <vf-apollo
    v-slot="{data}"
    :query="require('~/graphql/modules/searchProduct.graphql')"
    :variables="{search:keyword}"
  >
    <div v-if="data.searchProduct.content.length > 0" class="home-page__latest_products mb-5">
      <div class="home-page__latest_products_title text-sm-center mb-5 h6">{{$t('modules.store.searchProduct.textTitle')}}</div>
      <vf-products-grid :products="data.searchProduct.content"/>
    </div>
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
