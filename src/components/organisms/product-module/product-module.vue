<template>
  <div v-if="items.length > 0" class="vf-o-product-module">
    <vf-a-heading
      level="4"
      class="vf-o-product-module__title sm:text-center mb-4"
    >
      <slot></slot>
    </vf-a-heading>
    <vf-o-product-grid
      class="vf-o-product-module__items"
      :products="items"
      :column="column"
    />
  </div>
</template>
<script>
export default {
  props: ["items", "column"],
};
</script>
