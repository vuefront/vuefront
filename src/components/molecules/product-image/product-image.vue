<template>
  <section class="vf-m-product-image">
    <a href="#" @click.prevent="handleOpenPopup(0)">
      <vf-a-image
        :lazy-src="mainImageLazy"
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
          @click.prevent="handleOpenPopup(Number(index) + 1)"
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
    <vf-m-client-only>
      <vf-m-product-image-popup
        :show="popup"
        :index="popupIndex"
        :images="images"
        @click:close="handleClosePopup"
      />
    </vf-m-client-only>
  </section>
</template>
<script lang="ts" setup>
import { computed, defineComponent, inject, PropType, ref } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: null,
  },
  width: {
    type: [String, Number] as PropType<String | Number>,
    required: false,
    default: null,
  },
  height: {
    type: [String, Number] as PropType<String | Number>,
    required: false,
    default: null,
  },
});
let popup = ref(false);
let popupIndex = ref(0);

const $vuefront = inject<any>("$vuefront");

const getWidth = computed(() => {
  let width = props.width;
  if (!props.width) {
    if (props.height) {
      width =
        (Number(props.height) * $vuefront.images.product.width) /
        $vuefront.images.product.height;
    } else {
      width = $vuefront.images.product.width;
    }
  }
  return width;
});
const getHeight = computed(() => {
  let height = props.height;

  if (!props.height) {
    if (props.width) {
      height =
        (Number(props.width) * $vuefront.images.product.height) /
        $vuefront.images.product.width;
    } else {
      height = $vuefront.images.product.height;
    }
  }
  return height;
});

const mainImage = computed<string>(() => {
  return props.product.imageBig !== ""
    ? props.product.imageBig
    : $vuefront.images.placeholder.image;
});

const mainImageLazy = computed<string>(() => {
  return props.product.imageLazy !== ""
    ? props.product.imageLazy
    : $vuefront.images.placeholder.image;
});

const images = computed(() => {
  let result: { thumb: string; src: string }[] = [];

  result = [
    ...result,
    {
      thumb: mainImage.value,
      src: mainImage.value,
    },
  ];

  props.product.images.forEach(({ imageBig }: { imageBig: string }) => {
    result = [
      ...result,
      {
        thumb: imageBig,
        src: imageBig,
      },
    ];
  });

  return result;
});

const handleOpenPopup = (index: number) => {
  popupIndex.value = index;
  popup.value = true;
};

const handleClosePopup = () => {
  popup.value = false;
};
</script>
