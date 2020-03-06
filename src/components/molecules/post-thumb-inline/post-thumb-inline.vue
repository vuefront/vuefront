<template>
  <vf-a-link :to="url" v-if="post" class="vf-m-post-thumb-inline">
    <vf-m-media noBody vertical-align="center">
      <vf-m-media-aside
        v-if="!rightAlign"
        class="mr-3 vf-m-post-thumb-inline__image vf-m-post-thumb-inline__image--left"
      >
        <vf-m-post-thumb-image
          :post="post"
          :width="$vuefront.images.postThumbInline.width"
          :height="$vuefront.images.postThumbInline.height"
        />
      </vf-m-media-aside>
      <vf-m-media-body>
        <vf-a-heading level="5" class="mt-0 mb-1 vf-m-post-thumb-inline__name">{{post.name}}</vf-a-heading>
        <p class="mb-0 text-sm vf-m-post-thumb-inline__description" v-html="post.shortDescription" />
      </vf-m-media-body>
      <vf-m-media-aside
        v-if="rightAlign"
        class="ml-3 vf-m-post-thumb-inline__image vf-m-post-thumb-inline__image--right"
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
<script>
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
