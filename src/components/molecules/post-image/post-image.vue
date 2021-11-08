<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="post.name"
    :title="post.name"
    :width-amp="getWidth"
    :height-amp="getHeight"
    :fluid="fluid"
    :class="{ 'card-img': card }"
    :full-width="fullWidth"
    class="vf-m-post-image"
  />
</template>
<script lang="ts" setup>
import placeholder from "../../../../assets/img/placeholder.png";
import { computed, inject } from "vue";
const vuefront$ = inject<any>("$vuefront");
const props = defineProps({
  card: {
    type: Boolean,
    default() {
      return false;
    },
  },
  fluid: {
    type: Boolean,
    default() {
      return false;
    },
  },
  fullWidth: {
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
  props.post.image !== "" ? props.post.image : placeholder
);
const mainImagelazy = computed(() =>
  props.post.imageLazy !== "" ? props.post.imageLazy : placeholder
);
const getWidth = computed(() => {
  let width = props.width;
  if (!props.width) {
    if (props.height) {
      width =
        (+props.height * vuefront$.images.post.width) /
        vuefront$.images.post.height;
    } else {
      width = vuefront$.images.post.width;
    }
  }
  return width;
});
const getHeight = computed(() => {
  let height = props.height;
  if (!props.height) {
    if (props.width) {
      height =
        (+props.width * vuefront$.images.post.height) /
        vuefront$.images.post.width;
    } else {
      height = vuefront$.images.post.height;
    }
  }
  return height;
});
</script>
