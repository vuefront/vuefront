<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-sm-center mb-5 h6">Latest products</div>
    <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/latestProduct.graphql')">
      <vf-products-grid :products="data.latestProducts.content"/>
    </vf-apollo>
  </div>
</template>

