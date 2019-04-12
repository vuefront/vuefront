<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-sm-center mb-5 h6">Latest products</div>
    <vf-apollo :query="require('~/graphql/modules/latestProduct.graphql')">
      <template v-slot:default="{data}">
        <vf-products-grid :products="data.latestProducts.content"/>
      </template>
    </vf-apollo>
  </div>
</template>

