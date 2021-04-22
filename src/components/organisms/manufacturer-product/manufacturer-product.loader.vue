<template>
  <section class="vf-l-o-manufacturer-product">
    <vf-l-o-product-sort class="mb-4" />
    <vf-l-o-product-grid :grid-size="gridSize" />
  </section>
</template>
<script>
export default {
  props: ["gridSize"],
};
</script>
