<template>
  <section class="vf-l-t-store-special">
    <vf-m-row align-h="center" style="padding-top: 7px">
      <vf-m-col xs="4">
        <vf-m-skeleton height="37px" class="mx-auto mb-5"></vf-m-skeleton>
      </vf-m-col>
    </vf-m-row>
    <vf-l-o-category-product :grid-size="gridSize" class="mt-5" />
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
