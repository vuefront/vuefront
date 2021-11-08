<template>
  <div class="vf-m-post-thumb">
    <vf-a-link :to="url">
      <vf-m-post-thumb-image :post="post" layout="responsive" />
    </vf-a-link>
    <vf-a-link :to="url">
      <vf-a-heading tag="h3" level="6" class="vf-m-post-thumb__title">{{
        post.name
      }}</vf-a-heading>
    </vf-a-link>
    <div class="vf-m-post-thumb__date">{{ post.datePublished }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    default() {
      return {
        name: "",
        image: "",
        imageLazy: "",
        keyword: "",
        shortDescription: "",
      };
    },
  },
});

const url = computed(() => {
  if (props.post.keyword && props.post.keyword !== "") {
    return "/" + props.post.keyword;
  } else {
    return "/blog/post/" + props.post.id;
  }
});
</script>
