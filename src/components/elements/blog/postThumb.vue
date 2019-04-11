<template>
  <b-card class="card-post" no-body>
    <b-link :to="`/blog/post/${post.id}`">
      <b-card-img-lazy fluid :src="post.image" :blank-src="post.imageLazy" class="card-post__image"/>
    </b-link>

    <b-card-body class="pt-0">
      <h3 class="h6 mb-0 card-post__title">{{ post.title }}</h3>
      <div v-html="post.shortDescription" class="card-post__description text-sm mb-3"></div>
    </b-card-body>
  </b-card>
</template>
<script>
import BCard from "bootstrap-vue/es/components/card/card";
import BCardImgLazy from "bootstrap-vue/es/components/card/card-img-lazy";
import BCardBody from "bootstrap-vue/es/components/card/card-body";
import BLink from "bootstrap-vue/es/components/link/link";
import "vuefront/scss/elements/blog/postThumb.scss";
export default {
  components: {
    BLink,
    BCard,
    BCardBody,
    BCardImgLazy
  },
  props: ["post"]
};
</script>
