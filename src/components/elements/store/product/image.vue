<template>
  <section class="vf-product-thumbnails mb-4">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <b-img-lazy
        :src="mainImage"
        :blank-src="mainImagelazy"
        fluid
        style="width: 100%;"
      />
    </a>
    <b-row v-if="product.images.length > 0" class="mt-3">
      <b-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <a href="#" @click.prevent="handleOpenPopup(index + 1)">
          <b-img-lazy
            :src="value.image"
            :blank-src="value.imageLazy"
            fluid
            style="width: 100%;"
          />
        </a>
      </b-col>
    </b-row>
    <LightBox :images="images" :show-light-box="false" ref="lightbox"></LightBox>
  </section>
</template>
<script>
import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
import { BImgLazy, BRow, BCol } from "bootstrap-vue/es/components";
import placeholder from "~/assets/img/placeholder.png";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
import LightBox from "vue-image-lightbox";
import PicZoom from "vue-piczoom";
Vue.use(VueLazyLoad);
export default {
  components: {
    PicZoom,
    BImgLazy,
    BRow,
    BCol,
    LightBox
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
      return this.product.imagelazy !== ""
        ? this.product.imagelazy
        : placeholder;
    }
  },
  methods: {
    handleOpenPopup(index) {
      this.$refs.lightbox.showImage(index);
    }
  }
};
</script>
