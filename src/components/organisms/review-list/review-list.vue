<template>
  <div class="vf-o-review-list">
    <vf-m-review
      v-for="(review, index) in reviews"
      :key="index"
      :review="review"
    />
  </div>
</template>
<script>
export default {
  props: ["reviews"],
};
</script>
