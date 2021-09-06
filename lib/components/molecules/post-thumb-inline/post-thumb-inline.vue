<template>
  <vf-a-link v-if="post" :to="url" class="vf-m-post-thumb-inline">
    <vf-m-media no-body vertical-align="center">
      <vf-m-media-aside
        v-if="!rightAlign"
        class="
          vf-m-post-thumb-inline__image vf-m-post-thumb-inline__image--left
        "
      >
        <vf-m-post-thumb-image
          :post="post"
          :width="$vuefront.images.postThumbInline.width"
          :height="$vuefront.images.postThumbInline.height"
        />
      </vf-m-media-aside>
      <vf-m-media-body>
        <vf-a-heading
          level="5"
          class="mt-0 mb-1 vf-m-post-thumb-inline__name"
          >{{ post.name }}</vf-a-heading
        >
        <p
          class="mb-0 text-sm vf-m-post-thumb-inline__description"
          v-html="post.shortDescription"
        />
      </vf-m-media-body>
      <vf-m-media-aside
        v-if="rightAlign"
        class="
          vf-m-post-thumb-inline__image vf-m-post-thumb-inline__image--right
        "
      >
        <vf-m-post-thumb-image
          :post="post"
          :width="$vuefront.images.postThumbInline.width"
          :height="$vuefront.images.postThumbInline.height"
        />
      </vf-m-media-aside>
    </vf-m-media>
  </vf-a-link>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    default() {
      return null;
    },
  },
  rightAlign: {
    type: Boolean,
    default() {
      return false;
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
