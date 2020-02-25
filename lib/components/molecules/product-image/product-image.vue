<template>
  <section class="vf-m-product-image mb-4">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <vf-a-amp-image
        v-if="$vuefront.isAMP"
        :src="mainImage"
        layout="responsive"
        :width="$vuefront.options.image.product.width"
        :height="$vuefront.options.image.product.height"
      />
      <vf-a-image v-else :lazy-src="mainImage" :src="mainImagelazy" fluid full-width />
    </a>
    <vf-m-row v-if="product.images.length > 0" class="mt-3 vf-m-product-image__thumbnails">
      <vf-m-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <a
          class="vf-m-product-image__thumbnail"
          href="#"
          @click.prevent="handleOpenPopup(index + 1)"
        >
          <vf-a-amp-image
            v-if="$vuefront.isAMP"
            :src="value.image"
            layout="responsive"
            :width="$vuefront.options.image.product.width"
            :height="$vuefront.options.image.product.height"
          />
          <vf-a-image v-else :lazy-src="value.image" :src="value.imageLazy" fluid full-width />
        </a>
      </vf-m-col>
    </vf-m-row>
    <client-only>
      <vf-m-product-image-popup
        :show="popup"
        :index="popupIndex"
        :images="images"
        @click:close="handleClosePopup"
      />
    </client-only>
  </section>
</template>
<script>
import Vue from "vue";
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
      return this.product.imageBig !== ""
        ? this.product.imageBig
        : this.$vuefront.options.image.placeholder;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : this.$vuefront.options.image.placeholder;
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
