<template>
  <section class="vf-product-thumbnails mb-4">
    <b-img-lazy :src="mainImage" :blank-src="mainImagelazy" fluid style="width: 100%;"/>
  </section>
</template>
<script>
import { BImgLazy } from "bootstrap-vue/es/components";
import placeholder from "~/assets/img/placeholder.png";
export default {
  components: {
    BImgLazy
  },
  props: ["product"],
  computed: {
    mainImage() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    mainImagelazy() {
      return this.product.imagelazy !== ""
        ? this.product.imagelazy
        : placeholder;
    }
  }
};
</script>
