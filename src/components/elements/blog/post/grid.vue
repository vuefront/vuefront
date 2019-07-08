<template>
  <section>
    <b-row>
      <b-col sm="12" :md="column ? 12 : 12 / gridSize" v-for="(value, index) in posts" :key="index">
        <vf-post-thumb :post="value"/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol, BContainer } from "bootstrap-vue";
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
    },
    gridSize: {
      type: Number,
      default: 4
    }
  }
};
</script>
