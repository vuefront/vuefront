<template>
  <vf-o-apollo
    class="vf-e-store-latest-product"
    :variables="{ size: $vuefront.options.productGridSize }"
  >
    <template #loader>
      <span>
        <vf-l-o-product-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-product-module
          :items="data.latestProducts.content"
          :column="column"
          >{{
            $t("modules.store.latestProduct.textTitle")
          }}</vf-o-product-module
        >
      </span>
    </template>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
defineProps({
  column: {
    type: Boolean,
    default: false,
  },
});
</script>
<graphql>
query($size: Int){
    latestProducts: productsList(page: 1, size: $size, sort: "date_added", order: "DESC") {
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
