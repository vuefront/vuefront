<template>
  <div class="vf-o-post-reviews">
    <vf-a-heading level="3" class="vf-o-post-reviews__title">{{
      $t("elements.common.reviews.titleText")
    }}</vf-a-heading>
    <vf-o-review-list :reviews="post.reviews.content" class="vf-o-post-reviews__content" />
    <vf-o-review-form class="vf-o-post-reviews__form" @submit="onSubmit" />
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
        limit: 3,
      });
    },
  },
};
</script>