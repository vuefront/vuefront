<template>
  <vf-o-apollo class="vf-e-store-special-product">
    <template #loader>
      <vf-l-o-product-module :column="column" />
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