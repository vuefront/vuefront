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
        xs="12"
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
<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue"
export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
      default: null
    },
    width: {
      type: [String, Number] as PropType<String | Number>,
      required: true,
      default: null
    },
    height: {
      type: [String, Number] as PropType<String | Number>,
      required: true,
      default: null
    },
  },
  setup(props, ctx) {
    let popup = ref(false)
    let popupIndex = ref(0)
    
    const getWidth = computed(() => {
      let width = props.width;
      if (!props.width) {
        if (props.height) {
          width =
            (props.height * props.$vuefront.images.product.width) /
            this.$vuefront.images.product.height;
        } else {
          width = this.$vuefront.images.product.width;
        }
      }
      return width;
    })
    const getHeight = computed(() => {
      let height = props.height;
      if (!props.height) {
        if (props.width) {
          height =
            (props.width * this.$vuefront.images.product.height) /
            this.$vuefront.images.product.width;
        } else {
          height = this.$vuefront.images.product.height;
        }
      }
      return height;
    })

    return {
      getWidth,
      getHeight,
      popup,
      popupIndex
    }
  },
  computed: {
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
});
</script>