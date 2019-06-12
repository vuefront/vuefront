<template>
  <div class="home-page__latest_products mb-5">
    <div
      class="home-page__latest_products_title text-sm-center mb-5 h6"
    >{{$t('modules.store.specialProduct.textTitle')}}</div>
    <vf-apollo :query="require('~/graphql/modules/specialProduct.graphql')">
      <template #loader>
        <vf-products-grid-loader/>
      </template>
      <template #default="{data}">
        <vf-products-grid :products="data.specialProducts.content"/>
      </template>
    </vf-apollo>
  </div>
</template>

