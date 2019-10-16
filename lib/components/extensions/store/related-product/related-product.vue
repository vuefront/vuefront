<template>
  <vf-o-apollo v-if="id" :variables="{id:id}">
    <template #loader>
      <vf-l-o-product-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-o-product-module
        v-if="data.relatedProducts.products.length > 0"
        :items="data.relatedProducts.products"
        :column="column"
      >{{$t('modules.store.relatedProduct.textTitle')}}</vf-o-product-module>
    </template>
  </vf-o-apollo>
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