<template>
  <section class="vf-m-product-image mb-4">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <vf-a-image :lazy-src="mainImagelazy" :src="mainImage" fluid full-width />
    </a>
    <vf-m-row v-if="product.images.length > 0" class="mt-3 vf-m-product-image__thumbnails">
      <vf-m-col sm="12" md="3" v-for="(value, index) in product.images" :key="index">
        <a
          class="vf-m-product-image__thumbnail"
          href="#"
          @click.prevent="handleOpenPopup(index + 1)"
        >
          <vf-a-image :lazy-src="value.imageLazy" :src="value.image" fluid full-width />
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
        : this.$vuefront.images.placeholder.image;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : this.$vuefront.images.placeholder.image;
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