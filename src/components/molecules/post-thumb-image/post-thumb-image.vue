<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="post.title"
    :title="post.title"
    :width-amp="width ? width : $vuefront.images.postThumb.width"
    :height-amp="height ? height : $vuefront.images.postThumb.height"
    :width="width ? width : null"
    :class="{ 'card-img': card }"
    :fluid="!width && !height"
    class="vf-m-post-thumb-image"
    cover
  />
</template>
<script setup lang="ts">
import { computed, inject } from "vue";

const vuefront$ = inject<any>("$vuefront");
const props = defineProps({
  card: {
    type: Boolean,
    default() {
      return false;
    },
  },
  post: {
    type: Object,
    default() {
      return null;
    },
  },
  width: {
    type: [String, Number],
    default() {
      return null;
    },
  },
  height: {
    type: [String, Number],
    default() {
      return null;
    },
  },
  layout: {
    type: String,
    default() {
      return null;
    },
  },
});

const mainImage = computed(() =>
  props.post.image !== ""
    ? props.post.image
    : vuefront$.images.placeholder.image
);

const mainImagelazy = computed(() =>
  props.post.imageLazy !== ""
    ? props.post.imageLazy
    : vuefront$.images.placeholder.image
);
</script>
