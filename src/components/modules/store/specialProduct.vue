<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-sm-center mb-5 h6">Special products</div>
    <vf-apollo :query="require('~/graphql/modules/specialProduct.graphql')">
      <template v-slot:default="{data}">
        <vf-products-grid :products="data.specialProducts.content"/>
      </template>
    </vf-apollo>
  </div>
</template>

