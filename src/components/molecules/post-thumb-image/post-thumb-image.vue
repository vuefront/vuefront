<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="post.title"
    :title="post.title"
    :width-amp="width ? width : $vuefront.images.postThumb.width"
    :height-amp="height ? height : $vuefront.images.postThumb.height"
    :class="{'card-img': card}"
    :fluid="!width && !height"
    class="vf-m-post-thumb-image"
  />
</template>
<script>
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
      return this.post.image !== ""
        ? this.post.image
        : this.$vuefront.images.placeholder;
    },
    mainImagelazy() {
      return this.post.imageLazy !== ""
        ? this.post.imageLazy
        : this.$vuefront.images.placeholder;
    }
  }
};
</script>

