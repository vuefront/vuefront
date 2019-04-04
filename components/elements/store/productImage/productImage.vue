<template>
  <section class="vf-product-thumbnails mb-4">
    <v-img :src="this.product.image" :lazy-src="this.product.imageLazy">
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
  </section>
</template>
<script>
import isNull from "lodash/isNull";
import { VImg, VLayout, VProgressCircular } from "vuetify/lib";
export default {
  name: "vfStoreProductImageDefault",
  components: {
    VImg,
    VLayout,
    VProgressCircular
  },
  props: ["product"]
};
</script>
