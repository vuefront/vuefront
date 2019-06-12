<template>
  <div class="home-page__latest_products mb-5">
    <div
      class="home-page__latest_products_title text-sm-center mb-5 h6"
    >{{$t('modules.store.latestProduct.textTitle')}}</div>
    <vf-apollo :query="require('~/graphql/modules/latestProduct.graphql')">
      <template #loader>
        <vf-products-grid-loader :column="column"/>
      </template>
      <template #default="{data}">
        <vf-products-grid :products="data.latestProducts.content" :column="column"/>
      </template>
    </vf-apollo>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>

