<template>
  <div class="border-top border-bottom mb-5 vf-m-post-nav">
    <vf-m-row v-if="post.next || post.prev">
      <vf-m-col md="6" class="py-3 pr-3 border-right">
        <vf-m-post-thumb-inline :post="post.prev" />
      </vf-m-col>
      <vf-m-col md="6" class="py-3 pl-3">
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
      }
    }
  }
};
</script>
