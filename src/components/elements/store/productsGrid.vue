<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col sm="12" :md="list? 12: 3" v-for="(value, index) in products" :key="index">
        <vf-product-thumb :product="value" :wide="list"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
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
    list: {
      type: Boolean,
      default: false
    }
  }
};
</script>
