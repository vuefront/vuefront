<template>
  <v-card class="card-post">
    <nuxt-link :to="`/blog/post/${post.id}`">
      <v-img :src="post.image" :lazy-src="post.imageLazy" aspect-ratio="1" height="228">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
    </nuxt-link>

    <v-card-title primary-title class="text-xs-center">
      <div style="width:100%;">
        <h3 class="subheading font-weight-medium mb-0 card-post__title">{{ post.title }}</h3>
        <div v-html="post.shortDescription" class="card-post__description body-1 mb-3"></div>
      </div>
    </v-card-title>
  </v-card>
</template>
<script>
import { VCard, VCardTitle, VLayout, VImg, VProgressCircular } from "vuetify/lib";
import 'vuefront/scss/elements/blog/postThumb.scss'
export default {
  name: "vfBlogPostThumbDefault",
  components: {
    VCard,
    VCardTitle,
    VImg,
    VProgressCircular,
    VLayout
  },
  props: ["post"]
};
</script>
