<template>
  <vf-a-image
    :lazy-src="mainImage"
    :src="mainImagelazy"
    :width="width"
    :height="height"
    :fluid="fluid"
    :full-width="fullWidth"
  />
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: {
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
