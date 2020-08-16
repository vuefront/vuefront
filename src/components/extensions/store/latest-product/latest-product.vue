<template>
  <vf-o-apollo class="vf-e-store-latest-product":variables="{size: $vuefront.options.productGridSize}">
    <template #loader>
      <vf-l-o-product-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-o-product-module
        :items="data.latestProducts.content"
        :column="column"
      >{{$t('modules.store.latestProduct.textTitle')}}</vf-o-product-module>
    </template>
  </vf-o-apollo>
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
        }
    }
}
</graphql>

