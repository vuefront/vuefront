<template>
  <vf-m-card class="vf-m-review">
    <div>
      <vf-a-heading
        level="5"
        class="vf-m-review__author reviews-section__author"
        >{{ review.author }}</vf-a-heading
      >
      <div class="vf-m-review__content">{{ review.content }}</div>
    </div>
  </vf-m-card>
</template>
<script lang="ts" setup>
defineProps({
  review: {
    type: Object,
    default: () => null,
  },
});
</script>
