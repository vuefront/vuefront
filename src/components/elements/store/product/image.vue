<template>
  <section class="vf-product-thumbnails mb-4">
    <b-img-lazy :src="mainImage" :blank-src="mainImagelazy" fluid style="width: 100%;"/>
    <b-row>
      <b-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <b-img-lazy :src="value.image" :blank-src="value.imageLazy" fluid style="width: 100%;"/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BImgLazy, BRow, BCol } from "bootstrap-vue/es/components";
import placeholder from "~/assets/img/placeholder.png";
import PicZoom from 'vue-piczoom'
export default {
  components: {
    PicZoom,
    BImgLazy,
    BRow,
    BCol
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
