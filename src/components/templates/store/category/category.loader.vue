<template>
  <section class="vf-l-t-store-category">
    <vf-l-o-category-info />
    <vf-l-o-category-grid />
    <vf-l-o-category-product :gridSize="gridSize" class="mt-5" />
  </section>
</template>
<script>
export default {
  props: ["gridSize"]
};
</script>
