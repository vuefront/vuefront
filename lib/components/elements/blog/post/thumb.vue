<template>
  <b-card class="card-post" no-body>
    <b-link :to="url" class="card-post_image_wrapper">
      <amp-img
        v-if="$vuefront.isAMP"
        :src="mainImage"
        :alt="post.title"
        :title="post.title"
        width="246"
        height="153"
        class="card-post__image"
      />
      <b-card-img-lazy
        v-else
        fluid
        :alt="post.title"
        :title="post.title"
        :src="mainImage"
        :blank-src="mainImagelazy"
        class="card-post__image"
      />
    </b-link>

    <b-card-body class="pt-0">
      <h3 class="h6 mb-0 card-post__title">{{ post.title }}</h3>
      <div v-html="post.shortDescription" class="card-post__description text-sm mb-3"></div>
    </b-card-body>
  </b-card>
</template>
<script>
import { BCard, BCardImgLazy, BCardBody, BLink } from "bootstrap-vue";
import placeholder from "vuefront/assets/img/placeholder.png";

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
      return this.post.imageLazy !== "" ? this.post.imageLazy : placeholder;
    },
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
<style lang="scss">
.card-post {
  margin-bottom: 30px;
  &__title {
    min-height: 65px;
    max-height: 65px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__description {
    min-height: 65px;
    max-height: 65px;
    overflow: hidden;
  }

  &__image_wrapper {
    min-height: 213px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
  }
}
</style>
