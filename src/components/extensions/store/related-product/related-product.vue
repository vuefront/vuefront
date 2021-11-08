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
<script setup lang="ts">
import { isEmpty } from "lodash";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
  column: {
    type: Boolean,
    default: false,
  },
});
const id = computed(() => {
  let result: boolean | string = false;

  if (route && !isEmpty(route.params.id)) {
    result = route.params.id as string;
  }
  return result;
});
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
