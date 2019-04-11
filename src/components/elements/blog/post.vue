<template>
  <section class="post-section">
    <div class="post-section__title mb-3 h1 text-sm-left">{{post.title}}</div>
    <b-img-lazy :src="post.image" :blank-src="post.imageLazy" fluid class="post-section__image mb-3" style="width: 100%;"/>
    <div class="post-section__content lead" v-html="post.description"/>
    <vf-reviews :reviews="post.reviews" @create="handleCreateReview"/>
  </section>
</template>
<script>
import BImgLazy from "bootstrap-vue/es/components/image/img-lazy";
export default {
  components: {
    BImgLazy
  },
  props: ["post"],
  methods: {
    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("blog/post/addReview", {
        id: Number(this.post.id),
        content,
        author,
        rating,
        limit: 3
      });
    }
  }
};
</script>
