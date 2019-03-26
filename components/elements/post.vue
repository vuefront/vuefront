<template>
  <section class="post-section">
    <div class="post-section__title mb-3 display-2 font-weight-medium text-xs-left">{{post.title}}</div>
    <v-img :src="post.image" :lazy-src="post.imageLazy" aspect-ratio="1" class="post-section__image mb-3">
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
    <div class="post-section__content subheading font-weight-light" v-html="post.description"/>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Post } from "~/types";

@Component
export default class extends Vue {
  @Prop()
  post!: Post;
}
</script>
