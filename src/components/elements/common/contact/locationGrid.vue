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
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";

export default {
  components: {
    BRow, 
    BCol
  },
  props: ["items"]
}
</script>
