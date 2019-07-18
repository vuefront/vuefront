<template>
  <section class="location-grid slice-lg">
    <b-row>
      <b-col v-for="(value, index) in items" :key="index" sm="12" md="6">
        <vf-contact-location :location="value"/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol
  },
  props: ["items"]
};
</script>
