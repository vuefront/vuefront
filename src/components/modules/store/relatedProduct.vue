<template>
  <vf-apollo
    v-if="id"
    :query="require('~/graphql/modules/relatedProduct.graphql')"
    :variables="{id:id}"
  >
    <template #loader>
      <vf-product-module-loader :column="column"/>
    </template>
    <template #default="{data}">
      <vf-product-module
        v-if="data.relatedProducts.products.length > 0"
        :items="data.relatedProducts.products"
        :column="column"
      >{{$t('modules.store.relatedProduct.textTitle')}}</vf-product-module>
    </template>
  </vf-apollo>
</template>
<script>
import isEmpty from "lodash/isEmpty";
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id() {
      let result = false;

      if (!isEmpty(this.$route.params.id)) {
        result = this.$route.params.id;
      }
      if (!isEmpty(this.$route.matched[0].props)) {
        result = this.$route.matched[0].props.default.id;
      }

      return result;
    }
  }
};
</script>
