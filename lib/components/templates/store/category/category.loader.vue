<template>
  <section class="store-category-loader">
    <vf-l-category-info/>
    <vf-l-category-grid/>
    <vf-l-category-product :gridSize="gridSize" class="mt-5"/>
  </section>
</template>
<script>
export default {
  props: ['gridSize']
}
</script>
