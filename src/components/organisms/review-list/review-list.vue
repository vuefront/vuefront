<template>
  <div class="vf-o-review-list">
    <vf-m-review
      v-for="(review, index) in reviews"
      :key="index"
      :review="review"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  reviews: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
