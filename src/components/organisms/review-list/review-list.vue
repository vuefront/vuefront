<template>
  <div class="vf-o-review-list">
    <vf-m-review v-for="(review, index) in reviews" :review="review" :key="index"/>
  </div>
</template>
<script>
export default {
  props: ["reviews"]
};
</script>
