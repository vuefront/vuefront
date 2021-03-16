<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="product.title"
    :title="product.title"
    :width-amp="width ? width : $vuefront.images.productThumb.width"
    :height-amp="height ? height : $vuefront.images.productThumb.height"
    :width="width ? width : null"
    :class="{ 'card-img': card }"
    :fluid="!width && !height"
    class="vf-m-product-thumb-image"
    cover
  />
</template>
<script>
export default {
  props: {
    card: {
      type: Boolean,
      default() {
        return false;
      },
    },
    product: {
      type: Object,
      default() {
        return null;
      },
    },
    width: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    height: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    layout: {
      type: String,
      default() {
        return null;
      },
    },
  },
  computed: {
    mainImage() {
      return this.product.image !== ""
        ? this.product.image
        : this.$vuefront.images.placeholder.image;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : this.$vuefront.images.placeholder.image;
    },
  },
};
</script>
