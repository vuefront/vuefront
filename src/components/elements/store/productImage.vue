<template>
  <section class="vf-product-thumbnails mb-4">
    <b-img-lazy :src="product.image" :blank-src="product.imageLazy" fluid style="width: 100%;"/>
  </section>
</template>
<script>
import BImgLazy from "bootstrap-vue/es/components/image/img-lazy";
export default {
  components: {
    BImgLazy
  },
  props: ["product"]
};
</script>
