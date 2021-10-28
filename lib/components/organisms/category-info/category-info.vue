<template>
  <div class="vf-m-category-info">
    <vf-a-heading level="1" class="vf-m-category-info__name" tag="h1">{{
      category.name
    }}</vf-a-heading>
    <div
      class="vf-m-category-info__description"
      v-html="category.description"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  category: {
    type: Object,
    default() {
      return null;
    },
  },
});
</script>
