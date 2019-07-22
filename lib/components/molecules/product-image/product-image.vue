<template>
  <section class="vf-product-thumbnails mb-4">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <vf-a-amp-image
        v-if="$vuefront.isAMP"
        :src="mainImage"
        layout="responsive"
        width="300"
        height="300"
      />
      <vf-a-image v-else :lazy-src="mainImage" :src="mainImagelazy" fluid full-width />
    </a>
    <vf-m-row v-if="product.images.length > 0" class="mt-3">
      <vf-m-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <a href="#" @click.prevent="handleOpenPopup(index + 1)">
          <vf-a-amp-image
            v-if="$vuefront.isAMP"
            :src="value.image"
            layout="responsive"
            width="100"
            height="100"
          />
          <vf-a-image v-else :lazy-src="value.image" :src="value.imageLazy" fluid full-width />
        </a>
      </vf-m-col>
    </vf-m-row>
    <no-ssr>
      <vf-m-product-image-popup
        :show="popup"
        :index="popupIndex"
        :images="images"
        @click:close="handleClosePopup"
      />
    </no-ssr>
  </section>
</template>
<script>
import Vue from "vue";
import placeholder from "vuefront/assets/img/placeholder.png";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
export default {
  props: ["product"],
  data() {
    return {
      popup: false,
      popupIndex: 0
    };
  },
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
  methods: {
    handleOpenPopup(index) {
      this.popupIndex = index;
      this.popup = true;
    },
    handleClosePopup() {
      this.popup = false;
    }
  }
};
</script>
