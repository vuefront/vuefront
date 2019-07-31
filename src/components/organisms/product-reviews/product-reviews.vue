<template>
  <div class="reviews-section">
    <vf-a-heading
      level="3"
      class="reviews-section__title mb-3"
    >{{$t('elements.common.reviews.titleText')}}</vf-a-heading>
    <vf-o-review-list :reviews="product.reviews" class="mb-4" />
    <vf-o-review-form class="review-section__new" @submit="onSubmit"/>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    async onSubmit({ content, author, rating }) {
      await this.$store.dispatch("store/product/addReview", {
        id: this.product.id,
        content,
        author,
        rating,
        limit: 5
      });
    }
  }
};
</script>
