<template>
  <div class="home-page__latest_products mb-5" v-if="items.length > 0">
    <div class="home-page__latest_products_title text-sm-center mb-5 h6">
      <slot></slot>
    </div>
    <vf-products-grid :products="items" :column="column"/>
  </div>
</template>
<script>
export default {
  props: ["items", "column"]
};
</script>
