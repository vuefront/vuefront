<template>
  <vf-o-apollo
    class="vf-e-store-search-product"
    :variables="{ search: keyword }"
  >
    <template #loader>
      <span>
        <vf-l-o-product-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-product-module
          v-if="data.searchProduct.content.length > 0"
          :items="data.searchProduct.content"
          :column="column"
          >{{
            $t("modules.store.searchProduct.textTitle")
          }}</vf-o-product-module
        >
      </span>
    </template>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
  column: {
    type: Boolean,
    default: false,
  },
});

const keyword = computed(() => (route.params.slug ? route.params.slug : ""));
</script>
<graphql>
query($search: String){
    searchProduct: productsList(page: 1, size: 12, sort: "date_added", order: "DESC", search: $search) {
        content {
            id
            name
            shortDescription 
            price
            special
            image
            imageLazy
            rating
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
