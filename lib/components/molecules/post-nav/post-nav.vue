<template>
  <div class="vf-m-post-nav">
    <vf-m-row v-if="post.next || post.prev">
      <vf-m-col md="6" class="vf-m-post-nav__prev">
        <vf-m-post-thumb-inline :post="post.prev" />
      </vf-m-col>
      <vf-m-col md="6" class="vf-m-post-nav__next">
        <vf-m-post-thumb-inline :post="post.next" right-align />
      </vf-m-col>
    </vf-m-row>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>