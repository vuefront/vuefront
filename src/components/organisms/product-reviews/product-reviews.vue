<template>
  <div class="reviews-section">
    <vf-o-review-list :reviews="product.reviews" class="mb-4" />
    <vf-o-review-form class="review-section__new" @submit="onSubmit" />
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";

const props = defineProps({
  product: {
    type: Object,
    default: () => null,
  },
});
const store = useStore();
interface IReview {
  content: string;
  author: string;
  rating: number;
}
const onSubmit = async ({ content, author, rating }: IReview) => {
  await store.dispatch("store/product/addReview", {
    id: props.product.id,
    content,
    author,
    rating,
    limit: 5,
  });
};
</script>
