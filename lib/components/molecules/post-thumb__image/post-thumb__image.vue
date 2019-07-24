<template>
  <vf-a-amp-image
    v-if="$vuefront.isAMP"
    :src="mainImage"
    :alt="post.title"
    :title="post.title"
    :width="width ? width : 205"
    :height="height ? height : 205"
    :class="{'card-img': card}"
    class="vf-m-post-thumb__image"
  />
  <vf-a-image
    v-else
    :src="mainImagelazy"
    :lazy-src="mainImage"
    :alt="post.title"
    :title="post.title"
    :width="width"
    :height="height"
    :class="{'card-img': card}"
    :fluid="!width && !height"
    class="vf-m-post-thumb__image"
  />
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: {
    card: {
      type: Boolean,
      default() {
        return false;
      }
    },
    post: {
      type: Object,
      default() {
        return null;
      }
    },
    width: {
      type: String | Number,
      default() {
        return null;
      }
    },
    height: {
      type: String | Number,
      default() {
        return null;
      }
    }
  },
  computed: {
    mainImage() {
      return this.post.image !== "" ? this.post.image : placeholder;
    },
    mainImagelazy() {
      return this.post.imageLazy !== "" ? this.post.imageLazy : placeholder;
    }
  }
};
</script>

