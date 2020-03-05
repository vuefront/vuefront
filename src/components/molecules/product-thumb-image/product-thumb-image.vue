<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="product.title"
    :title="product.title"
    :width="width ? width : ''"
    :width-amp="width ? width : $vuefront.images.productThumb.width"
    :height-amp="height ? height : $vuefront.images.productThumb.height"
    :class="{'card-img': card}"
    class="vf-m-product-thumb-image"
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
    product: {
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
      return this.product.image !== ""
        ? this.product.image
        : this.$vuefront.images.placeholder.image;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : this.$vuefront.images.placeholder.image;
    }
  }
};
</script>

