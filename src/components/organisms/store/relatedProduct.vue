<template>
  <vf-apollo v-if="id" :variables="{id:id}">
    <template #loader>
      <vf-loader-product-module :column="column" />
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
import { isEmpty } from "lodash";
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
<graphql>
query($id: String) {
    relatedProducts: product(id: $id) {
        id
        products(limit: 4) {
            id
            image
            imageLazy
            description
            shortDescription
            price
            special
            name
            keyword
        }
    }
}
</graphql>