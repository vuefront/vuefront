<template>
  <div class="home-page__latest_products mb-5">
    <div
      class="home-page__latest_products_title text-sm-center mb-5 h6"
    >{{$t('modules.store.featuredProduct.textTitle')}}</div>
    <vf-apollo :query="require('~/graphql/modules/featuredProduct.graphql')" :variables="{ids}">
      <template #loader>
        <vf-products-grid-loader/>
      </template>
      <template #default="{data}">
        <vf-products-grid :products="data.featuredProducts.content"/>
      </template>
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
