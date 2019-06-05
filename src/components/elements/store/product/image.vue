<template>
  <section class="vf-product-thumbnails mb-4">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <b-img-lazy :src="mainImage" :blank-src="mainImagelazy" fluid style="width: 100%;"/>
    </a>
    <b-row v-if="product.images.length > 0" class="mt-3">
      <b-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <a href="#" @click.prevent="handleOpenPopup(index + 1)">
          <b-img-lazy :src="value.image" :blank-src="value.imageLazy" fluid style="width: 100%;"/>
        </a>
      </b-col>
    </b-row>
    <no-ssr>
      <LightBox :images="images" :show-light-box="false" ref="lightbox"></LightBox>
    </no-ssr>
  </section>
</template>
<script>
import Vue from "vue";
import { BImgLazy, BRow, BCol } from "bootstrap-vue";
import placeholder from "~/assets/img/placeholder.png";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);
export default {
  components: {
    BImgLazy,
    BRow,
    BCol
  },
  props: ["product"],
  computed: {
    images() {
      let result = [];

      result = [
        ...result,
        {
          thumb: this.mainImage,
          src: this.mainImage
        }
      ];

      this.product.images.forEach(({ imageBig }) => {
        result = [
          ...result,
          {
            thumb: imageBig,
            src: imageBig
          }
        ];
      });

      return result;
    },
    mainImage() {
      return this.product.imageBig !== "" ? this.product.imageBig : placeholder;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    }
  },
  beforeMount() {
    if(process.client) {
      const LightBox = require("vue-image-lightbox").default
      Vue.component('LightBox', LightBox)
    }
  },
  methods: {
    handleOpenPopup(index) {
      this.$refs.lightbox.showImage(index);
    }
  }
};
</script>
