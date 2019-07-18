<template>
  <vf-apollo>
    <template #loader>
      <vf-loader-product-module :column="column" />
    </template>
    <template #default="{data}">
      <vf-product-module
        :items="data.specialProducts.content"
        :column="column"
      >{{$t('modules.store.specialProduct.textTitle')}}</vf-product-module>
    </template>
  </vf-apollo>
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
    specialProducts: productsList(page: 1, size: 4, special: true, sort: "date_added", order: "DESC") {
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