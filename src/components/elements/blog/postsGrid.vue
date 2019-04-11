<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col sm="12" :md="column ? 12 : 3" v-for="(value, index) in posts" :key="index">
        <vf-post-thumb :post="value"/>
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
    posts: {
      type: Array,
      default: []
    },
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>
