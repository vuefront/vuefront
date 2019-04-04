<template>
  <section class="post-section">
    <div class="post-section__title mb-3 display-2 font-weight-medium text-xs-left">{{post.title}}</div>
    <v-img
      :src="post.image"
      :lazy-src="post.imageLazy"
      aspect-ratio="1"
      class="post-section__image mb-3"
    >
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
    <div class="post-section__content subheading font-weight-light" v-html="post.description"/>
    <vf-reviews :reviews="post.reviews" @create="handleCreateReview"/>
  </section>
</template>
<script>
import { VImg, VLayout, VProgressCircular } from "vuetify/lib";
export default {
  name: "vfBlogPostDefault",
  components: {
    VImg,
    VLayout,
    VProgressCircular
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
