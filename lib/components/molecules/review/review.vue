<template>
  <vf-m-card class="mb-3">
    <div>
      <vf-a-heading
        level="5"
        class="reviews-section__author mb-1 font-bold"
      >{{review.author}}</vf-a-heading>
      <div class="review-section_content lead">{{review.content}}</div>
    </div>
  </vf-m-card>
</template>
<script>
export default {
  props: ["review"]
};
</script>
