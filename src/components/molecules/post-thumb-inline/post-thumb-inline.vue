<template>
  <vf-a-link :to="url" v-if="post">
    <vf-m-media vertical-align="center" :right-align="rightAlign">
      <template #aside>
        <vf-m-post-image :post="post" width="160" />
      </template>
      <vf-a-heading level="5" class="mt-0 mb-1" >{{post.name}}</vf-a-heading>
      <p
        class="mb-0 text-sm"
        v-html="post.shortDescription"
        style="min-height: 65px;  max-height: 65px; overflow: hidden;"
      />
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
