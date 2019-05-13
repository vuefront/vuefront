<template>
  <b-card class="card-post" no-body>
    <b-link :to="`/blog/post/${post.id}`" class="card-post_image_wrapper">
      <b-card-img-lazy fluid :src="mainImage" :blank-src="mainImagelazy" class="card-post__image"/>
    </b-link>

    <b-card-body class="pt-0">
      <h3 class="h6 mb-0 card-post__title">{{ post.title }}</h3>
      <div v-html="post.shortDescription" class="card-post__description text-sm mb-3"></div>
    </b-card-body>
  </b-card>
</template>
<script>
import {
  BCard,
  BCardImgLazy,
  BCardBody,
  BLink
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/blog/postThumb.scss";
import placeholder from "~/assets/img/placeholder.png";

export default {
  components: {
    BLink,
    BCard,
    BCardBody,
    BCardImgLazy
  },
  props: ["post"],
  computed: {
    mainImage() {
      return this.post.image !== "" ? this.post.image : placeholder;
    },
    mainImagelazy() {
      return this.post.imagelazy !== "" ? this.post.imagelazy : placeholder;
    }
  }
};
</script>
