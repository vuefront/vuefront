<template>
  <vf-apollo :query="require('vuefront/graphql/modules/featuredProduct.graphql')" :variables="{ids}">
    <template #loader>
      <vf-loader-product-module :column="column"/>
    </template>
    <template #default="{data}">
      <vf-product-module
        :items="data.featuredProducts.content"
        :column="column"
      >{{$t('modules.store.featuredProduct.textTitle')}}</vf-product-module>
    </template>
  </vf-apollo>
</template>
<script>
export default {
  props: {
    ids: {
      type: Array,
      default: []
    },
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>
