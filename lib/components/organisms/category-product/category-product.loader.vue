<template>
  <section class="vf-l-category-product">
    <vf-l-product-sort class="mb-4"/>
    <vf-l-product-grid :grid-size="gridSize"/>
  </section>
</template>
<script>
export default {
  props: ['gridSize']
}
</script>
