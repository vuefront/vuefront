<template>
  <div class="manufacturer-section">
    <vf-a-heading
      level="1"
      class="manufacturer-section__name sm:text-center"
      tag="h1"
      >{{ manufacturer.name }}</vf-a-heading
    >
  </div>
</template>
<script lang="ts" setup>
defineProps({
  manufacturer: {
    type: Object,
    default() {
      return null;
    },
  },
});
</script>
