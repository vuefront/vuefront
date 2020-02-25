<template>
  <vf-o-apollo class="vf-e-store-latest-product">
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
{
    latestProducts: productsList(page: 1, size: 4, sort: "date_added", order: "DESC") {
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
        }
    }
}
</graphql>

