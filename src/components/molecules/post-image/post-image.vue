<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="post.title"
    :title="post.title"
    :width="getWidth"
    :height="getHeight"
    :fluid="fluid"
    :class="{'card-img': card}"
    :full-width="fullWidth"
    class="vf-m-post-image"
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
    fluid: {
      type: Boolean,
      default() {
        return false;
      }
    },
    fullWidth: {
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
    },
    layout: {
      type: String,
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
    },
    getWidth() {
      let width = this.width;
      if (!this.width) {
        if (this.height) {
          width =
            (this.height * this.$vuefront.images.post.width) /
            this.$vuefront.images.post.height;
        } else {
          width = this.$vuefront.images.post.width;
        }
      }
      return width;
    },
    getHeight() {
      let height = this.height;
      if (!this.height) {
        if (this.width) {
          height =
            (this.width * this.$vuefront.images.post.height) /
            this.$vuefront.images.post.width;
        } else {
          height = this.$vuefront.images.post.height;
        }
      }
      return height;
    }
  }
};
</script>
