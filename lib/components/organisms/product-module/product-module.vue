<template>
  <div class="product-module-section mb-5" v-if="items.length > 0">
    <vf-a-heading level="4" class="product-module-section__title text-sm-center mb-4">
      <slot></slot>
    </vf-a-heading>
    <vf-o-product-grid class="product-module-section__items" :products="items" :column="column" />
  </div>
</template>
<script>
export default {
  props: ["items", "column"]
};
</script>
