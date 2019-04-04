<template>
  <v-container fluid pa-0 grid-list-xl>
    <v-layout align-start justify-start row wrap>
      <v-flex xs12 :md3="!list" v-for="(value, index) in products" :key="index">
        <vf-product-thumb :product="value" :wide="list"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { VContainer, VLayout, VFlex } from "vuetify/lib";
export default {
  name: "vfStoreProductsGridDefault",
  components: {
    VContainer,
    VLayout,
    VFlex
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
