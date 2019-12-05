<template>
  <vf-a-link :to="url" v-if="post" class="vf-m-post-thumb-inline">
    <vf-m-media vertical-align="center" :right-align="rightAlign">
      <template #aside>
        <vf-m-post-thumb-image
          :post="post"
          :width="$vuefront.options.image.postThumbInline.width"
          :height="$vuefront.options.image.postThumbInline.height"
        />
      </template>
      <vf-a-heading level="5" class="mt-0 mb-1 vf-m-post-thumb-inline__title">{{post.name}}</vf-a-heading>
      <p class="mb-0 text-sm vf-m-post-thumb-inline__description" v-html="post.shortDescription" />
    </vf-m-media>
  </vf-a-link>
</template>
<script>
import "./post-thumb-inline.scss";
export default {
  props: {
    post: {
      type: Object,
      default() {
        return null;
      }
    },
    rightAlign: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    url() {
      if (this.post.keyword && this.post.keyword !== "") {
        return "/" + this.post.keyword;
      } else {
        return "/blog/post/" + this.post.id;
      }
    }
  }
};
</script>
