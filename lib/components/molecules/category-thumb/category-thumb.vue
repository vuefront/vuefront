<template>
  <vf-a-link :to="category.url" class="vf-m-category-thumb">
    <vf-a-image
      :src="image"
      :lazy-src="imageLazy"
      class="vf-m-category-thumb__image"
      :width-amp="getWidth"
      :height-amp="getHeight"
      full-width
      fluid
    />
    <div class="vf-m-category-thumb__title">{{ category.name }}</div>
  </vf-a-link>
</template>
<script lang="ts" setup>
import placeholder from "../../../../assets/img/placeholder.png";
import { computed, inject, PropType } from "vue";
const $vuefront = inject<any>("$vuefront");
const props = defineProps({
  category: {
    type: Object,
    default: () => null,
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: () => null,
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: () => null,
  },
});

const url = computed(() => {
  if (props.category.keyword && props.category.keyword !== "") {
    return "/" + props.category.keyword;
  } else {
    return `/store/category/${props.category.id}`;
  }
});
const getWidth = computed(() => {
  let width = props.width;
  if (!props.width) {
    if (props.height) {
      width =
        (+props.height * $vuefront.images.categoryThumb.width) /
        $vuefront.images.categoryThumb.height;
    } else {
      width = $vuefront.images.categoryThumb.width;
    }
  }
  return width;
});
const getHeight = computed(() => {
  let height = props.height;
  if (!props.height) {
    if (props.width) {
      height =
        (+props.width * $vuefront.images.categoryThumb.height) /
        $vuefront.images.categoryThumb.width;
    } else {
      height = $vuefront.images.categoryThumb.height;
    }
  }
  return height;
});
const image = computed(() =>
  props.category.image !== "" ? props.category.image : placeholder
);
const imageLazy = computed(() =>
  props.category.imageLazy !== "" ? props.category.imageLazy : placeholder
);
</script>
