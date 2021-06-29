<template>
  <vf-o-apollo
    v-if="id"
    class="vf-e-store-related-product"
    :variables="{ id: id, limit: $vuefront.options.productGridSize }"
  >
    <template #loader>
      <span>
        <vf-l-o-product-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-product-module
          v-if="data.relatedProducts.products.length > 0"
          :items="data.relatedProducts.products"
          :column="column"
          >{{
            $t("modules.store.relatedProduct.textTitle")
          }}</vf-o-product-module
        >
      </span>
    </template>
  </vf-o-apollo>
</template>
<script>
import isEmpty from "lodash/isEmpty";
export default {
  props: {
    column: {
      type: Boolean,
      default: false,
    },
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
    },
  },
};
</script>
<graphql>
query($id: String, $limit: Int) {
    relatedProducts: product(id: $id) {
        id
        products(limit: $limit) {
            id
            image
            imageLazy
            description
            shortDescription
            price
            special
            name
            keyword
            url(url: "/store/product/_id")
            extra {
              name
              value
            }
            manufacturer {
                id
                name
                image
                imageLazy
                url(url: "/store/manufacturer/_id")
              }
        }
    }
}
</graphql>
