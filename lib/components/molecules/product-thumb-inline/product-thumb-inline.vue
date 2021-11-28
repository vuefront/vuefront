<template>
  <vf-m-media no-body class="vf-m-cart-product">
    <vf-m-media-aside
      vertical-align="center"
      class="vf-m-product-thumb-inline__image"
    >
      <vf-a-image
        :lazy-src="imageLazy"
        :src="image"
        :width-amp="$vuefront.images.productThumb.width"
        :height-amp="$vuefront.images.productThumb.height"
        :width="width"
      />
    </vf-m-media-aside>
    <vf-m-media-body class="vf-m-product-thumb-inline__content">
      <div class="vf-m-product-thumb-inline__name">
        <span>{{ product.name }}</span>
      </div>
      <div class="vf-m-product-thumb-inline__info">
        <div class="vf-m-product-thumb-inline__price">
          <span>{{ $t("molecules.productThumbInline.textPrice") }}:</span
          >{{ product.price }}
        </div>
        <span
          v-for="(value, index) in option"
          :key="index"
          class="vf-m-product-thumb-inline__option"
        >
          <div>
            <span
              class="vf-m-product-thumb-inline__option__name"
              v-html="value.name"
            ></span
            >:
            <span
              class="vf-m-product-thumb-inline__option__value"
              v-html="value.value"
            ></span>
          </div>
        </span>
      </div>
    </vf-m-media-body>
  </vf-m-media>
</template>
<script lang="ts" setup>
import placeholder from "../../../../assets/img/placeholder.png";
import { PropType, computed } from "vue";
interface Option {
  name: string;
  value: string;
}
const props = defineProps({
  product: {
    type: Object,
    default() {
      return null;
    },
  },
  option: {
    type: Array as PropType<Option[]>,
    default() {
      return [];
    },
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return "160";
    },
  },
});
const image = computed(() =>
  props.product.image !== "" ? props.product.image : placeholder
);
const imageLazy = computed(() =>
  props.product.imageLazy !== "" ? props.product.imageLazy : placeholder
);
</script>
