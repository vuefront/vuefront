<template>
  <div class="reviews-section">
    <vf-a-heading
      level="3"
      class="reviews-section__title mb-3"
    >{{$t('elements.common.reviews.titleText')}}</vf-a-heading>
    <vf-o-review-list :reviews="post.reviews.content" class="mb-4"  />
    <vf-o-review-form class="review-section__new" @submit="onSubmit"/>
  </div>
</template>
<script>
export default {
  props: ["post"],
  methods: {
    async onSubmit({ content, author, rating }) {
      await this.$store.dispatch("blog/post/addReview", {
        id: this.post.id,
        content,
        author,
        rating,
        limit: 3
      });
    }
  }
};
</script>
