<template>
  <div v-if="items.length > 0" class="vf й-o-product-module">
    <vf-a-heading level="4" class="vf-o-product-module__title">
      <slot></slot>
    </vf-a-heading>
    <vf-o-product-grid
      class="vf-o-product-module__items"
      :products="items"
      :column="column"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  column: {
    type: Boolean,
    default: false,
  },
});
</script>
