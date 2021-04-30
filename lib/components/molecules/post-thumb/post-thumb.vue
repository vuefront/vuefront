<template>
  <vf-m-card class="vf-m-post-thumb" no-body>
    <vf-a-link :to="url">
      <vf-m-post-thumb-image :post="post" card layout="responsive" />
    </vf-a-link>
    <vf-m-card-body class="pt-0">
      <vf-a-link :to="url">
        <vf-a-heading tag="h3" level="6" class="vf-m-post-thumb__title">{{
          post.title
        }}</vf-a-heading>
      </vf-a-link>
      <div
        class="vf-m-post-thumb__description"
        v-html="post.shortDescription"
      ></div>
    </vf-m-card-body>
  </vf-m-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {
          title: "",
          image: "",
          imageLazy: "",
          keyword: "",
          shortDescription: "",
        };
      },
    },
  },
  computed: {
    url() {
      if (this.post.keyword && this.post.keyword !== "") {
        return "/" + this.post.keyword;
      } else {
        return "/blog/post/" + this.post.id;
      }
    },
  },
};
</script>