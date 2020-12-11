<template>
  <div class="category-section">
    <vf-a-heading level="1" class="category-section__name sm:text-center" tag="h1">{{category.name}}</vf-a-heading>
    <div
      class="category-section__description sm:text-center mt-4 lead"
      v-html="category.description"
    />
  </div>
</template>
<script>
export default {
  props: ["category"]
};
</script>