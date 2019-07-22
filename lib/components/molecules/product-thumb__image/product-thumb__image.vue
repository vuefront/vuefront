<template>
  <vf-a-amp-image
    v-if="$vuefront.isAMP"
    :src="mainImage"
    :width="205"
    :height="205"
    class="vf-m-product-thumb__image card-img"
  />
  <vf-a-image
    v-else
    :src="mainImagelazy"
    :lazy-src="mainImage"
    class="vf-m-product-thumb__image card-img"
    fluid
  />
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: ["product"],
  computed: {
    mainImage() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    }
  }
};
</script>

