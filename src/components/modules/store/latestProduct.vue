<template>
  <vf-apollo :query="require('~/graphql/modules/latestProduct.graphql')">
    <template #loader>
      <vf-product-module-loader :column="column"/>
    </template>
    <template #default="{data}">
      <vf-product-module
        :items="data.latestProducts.content"
        :column="column"
      >{{$t('modules.store.latestProduct.textTitle')}}</vf-product-module>
    </template>
  </vf-apollo>
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

