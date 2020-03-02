<template>
  <vf-a-amp-image
    v-if="$vuefront.isAMP"
    :src="mainImage"
    :alt="product.title"
    :title="product.title"
    :width="width ? width : $vuefront.images.productThumb.width"
    :height="height ? height : $vuefront.images.productThumb.height"
    :class="{'card-img': card}"
    :layout="layout"
    class="vf-m-product-thumb-image"
  />
  <vf-a-image
    v-else
    :lazy-src="mainImage"
    :src="mainImagelazy"
    :alt="product.title"
    :title="product.title"
    :width="width ? width : $vuefront.images.productThumb.width"
    :height="height ? height : $vuefront.images.productThumb.height"
    :class="{'card-img': card}"
    :fluid="!width && !height"
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

