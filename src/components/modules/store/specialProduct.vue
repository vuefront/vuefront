<template>
  <vf-apollo :query="require('vuefront/graphql/modules/specialProduct.graphql')">
    <template #loader>
      <vf-loader-product-module :column="column"/>
    </template>
    <template #default="{data}">
      <vf-product-module
        :items="data.specialProducts.content"
        :column="column"
      >{{$t('modules.store.specialProduct.textTitle')}}</vf-product-module>
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

