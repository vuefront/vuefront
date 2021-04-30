<template>
  <vf-m-media no-body class="vf-m-product-thumb-inline">
    <vf-m-media-aside vertical-align="center" class="vf-m-product-thumb-inline__image">
      <vf-a-image
        :lazy-src="imageLazy"
        :src="image"
        width-amp="80"
        height-amp="80"
        width="80"
      />
    </vf-m-media-aside>
    <vf-m-media-body class="vf-m-product-thumb-inline__content">
      <div class="vf-m-product-thumb-inline__name">
        <span>{{ product.name }}</span>
      </div>
      <span class="vf-m-product-thumb-inline__model">{{ product.model }}</span>
      <span
        v-for="(value, index) in option"
        :key="index"
        class="vf-m-product-thumb-inline__option"
      >
        <div>
          <span v-html="value.name"></span>:
          <span v-html="value.value"></span>
        </div>
      </span>
    </vf-m-media-body>
  </vf-m-media>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
    option: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    image() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    imageLazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    },
  },
};
</script>