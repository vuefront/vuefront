<template>
  <section class="vf-l-t-store-manufacturer">
    <vf-l-o-manufacturer-info />
    <vf-l-o-manufacturer-product :grid-size="gridSize" class="mt-5" />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  gridSize: {
    type: Number,
    default: () => 4,
  },
});
</script>
