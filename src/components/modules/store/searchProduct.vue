<template>
  <vf-apollo
    :query="require('~/graphql/modules/searchProduct.graphql')"
    :variables="{search:keyword}"
  >
    <template #loader>
      <vf-product-module-loader :column="column"/>
    </template>
    <template #default="{data}">
      <vf-product-module
        v-if="data.searchProduct.content.length > 0"
        :items="data.searchProduct.content"
        :column="column"
      >{{$t('modules.store.searchProduct.textTitle')}}</vf-product-module>
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
  },
  computed: {
    keyword() {
      return this.$route.params.slug ? this.$route.params.slug : "";
    }
  }
};
</script>
