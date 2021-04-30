<template>
  <section class="vf-m-product-image">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <vf-a-image
        :lazy-src="mainImagelazy"
        :src="mainImage"
        fluid
        full-width
        :width-amp="getWidth"
        :height-amp="getHeight"
      />
    </a>
    <vf-m-row
      v-if="product.images.length > 0"
      class="vf-m-product-image__thumbnails"
    >
      <vf-m-col
        v-for="(value, index) in product.images"
        :key="index"
        sm="12"
        md="3"
      >
        <a
          class="vf-m-product-image__thumbnail"
          href="#"
          @click.prevent="handleOpenPopup(index + 1)"
        >
          <vf-a-image
            :lazy-src="value.imageLazy"
            :src="value.image"
            fluid
            full-width
          />
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
export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
    width: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    height: {
      type: [String, Number],
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      popup: false,
      popupIndex: 0,
    };
  },
  computed: {
    getWidth() {
      let width = this.width;
      if (!this.width) {
        if (this.height) {
          width =
            (this.height * this.$vuefront.images.product.width) /
            this.$vuefront.images.product.height;
        } else {
          width = this.$vuefront.images.product.width;
        }
      }
      return width;
    },
    getHeight() {
      let height = this.height;
      if (!this.height) {
        if (this.width) {
          height =
            (this.width * this.$vuefront.images.product.height) /
            this.$vuefront.images.product.width;
        } else {
          height = this.$vuefront.images.product.height;
        }
      }
      return height;
    },
    images() {
      let result = [];

      result = [
        ...result,
        {
          thumb: this.mainImage,
          src: this.mainImage,
        },
      ];

      this.product.images.forEach(({ imageBig }) => {
        result = [
          ...result,
          {
            thumb: imageBig,
            src: imageBig,
          },
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
    },
  },
  methods: {
    handleOpenPopup(index) {
      this.popupIndex = index;
      this.popup = true;
    },
    handleClosePopup() {
      this.popup = false;
    },
  },
};
</script>