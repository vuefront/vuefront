<template>
  <section>
    <b-row>
      <b-col
        sm="12"
        :md="list || column? 12: 12 / gridSize"
        v-for="(value, index) in products"
        :key="index"
      >
        <vf-product-thumb :product="value" :wide="list"/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol, BContainer } from "bootstrap-vue/es/components";
export default {
  components: {
    BContainer,
    BRow,
    BCol
  },
  props: {
    products: {
      type: Array,
      default: []
    },
    column: {
      type: Boolean,
      default: false
    },
    list: {
      type: Boolean,
      default: false
    },
    gridSize: {
      type: Number,
      default: 4
    }
  }
};
</script>
