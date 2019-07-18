<template>
  <div class="product-module-section mb-5" v-if="items.length > 0">
    <div class="product-module-section__title text-sm-center mb-5 h6">
      <slot></slot>
    </div>
    <vf-products-grid class="product-module-section__items" :products="items" :column="column"/>
  </div>
</template>
<script>
export default {
  props: ["items", "column"]
};
</script>
