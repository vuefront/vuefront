<template>
  <div class="loading-page">
    <section>
      <b-row>
        <b-col
          sm="12"
          :md="list || column? 12: 12 / gridSize"
          v-for="(value) in [1, 2, 3 ,4]"
          :key="value"
        >
          <vf-loader-post-thumb :wide="list"/>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol
  },
  props: {
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
