<template>
  <section>
    <vf-m-row
      :no-gutters="
        noGutters !== null ? noGutters : vuefront$.options.productGridNoGutters
      "
    >
      <vf-m-col
        v-for="(value, index) in products"
        :key="index"
        xs="12"
        :md="
          list || column
            ? 12
            : 12 / (gridSizeTablet || vuefront$.options.productGridSizeTablet)
        "
        :lg="
          list || column
            ? 12
            : 12 / (gridSize || vuefront$.options.productGridSize)
        "
      >
        <vf-o-product-thumb
          :product="value"
          :wide="list"
          :suffix-url="suffixUrl"
        />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script lang="ts" setup>
import { inject } from "vue";

defineProps({
  products: {
    type: Array,
    default() {
      return [];
    },
  },
  column: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Boolean,
    default: false,
  },
  noGutters: {
    type: Boolean,
    default() {
      return null;
    },
  },
  suffixUrl: {
    type: String,
    default() {
      return "";
    },
  },
  gridSize: {
    type: Number,
    default() {
      return null;
    },
  },
  gridSizeTablet: {
    type: Number,
    default() {
      return null;
    },
  },
});
const vuefront$ = inject<any>("$vuefront");
</script>
