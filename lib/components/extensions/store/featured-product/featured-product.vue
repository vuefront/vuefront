<template>
  <vf-o-apollo
    class="vf-e-store-featured-product"
    :variables="{ ids, limit: $vuefront.options.productGridSize }"
  >
    <template #loader>
      <span>
        <vf-l-o-product-module :column="column" />
      </span>
    </template>
    <template #default="{ data }">
      <span>
        <vf-o-product-module
          :items="data.featuredProducts.content"
          :column="column"
          >{{
            $t("modules.store.featuredProduct.textTitle")
          }}</vf-o-product-module
        >
      </span>
    </template>
  </vf-o-apollo>
</template>
<script>
export default {
  props: {
    ids: {
      type: Array,
      default() {
        return [];
      },
    },
    column: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<graphql>
query($ids: [Int], $limit: Int){
    featuredProducts: productsList(page: 1, size: $limit, ids: $ids, sort: "date_added", order: "DESC") {
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
