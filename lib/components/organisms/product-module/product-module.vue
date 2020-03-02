<template>
  <div class="vf-o-product-module" v-if="items.length > 0">
    <vf-a-heading level="4" class="vf-o-product-module__title text-sm-center mb-4">
      <slot></slot>
    </vf-a-heading>
    <vf-o-product-grid class="vf-o-product-module__items" :products="items" :column="column" />
  </div>
</template>
<script>
export default {
  name: 'vf-o-product-module',
  props: ["items", "column"]
};
</script>
