<template>
  <div class="vf-o-post-reviews">
    <vf-o-review-list
      :reviews="post.reviews.content"
      class="vf-o-post-reviews__content"
    />
    <vf-o-review-form class="vf-o-post-reviews__form" @submit="onSubmit" />
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";

const props = defineProps({
  post: {
    type: Object,
    default() {
      return null;
    },
  },
});
const store = useStore();
interface IReview {
  content: string;
  author: string;
  rating: string;
}
const onSubmit = async ({ content, author, rating }: IReview) => {
  await store.dispatch("blog/post/addReview", {
    id: props.post.id,
    content,
    author,
    rating,
    limit: 3,
  });
};
</script>
