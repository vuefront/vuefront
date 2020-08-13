<template>
  <vf-o-apollo class="vf-e-store-special-product">
    <template #loader>
      <vf-l-o-product-module :column="column" :variables="{size: $vuefront.options.productGridSize}"/>
    </template>
    <template #default="{data}">
      <vf-o-product-module
        :items="data.specialProducts.content"
        :column="column"
      >{{$t('modules.store.specialProduct.textTitle')}}</vf-o-product-module>
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
    specialProducts: productsList(page: 1, size: $size, special: true, sort: "date_added", order: "DESC") {
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