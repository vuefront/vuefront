<template>
  <section class="location-grid slice-lg">
    <vf-m-row>
      <vf-m-col v-for="(value, index) in items" :key="index" sm="12" md="6">
        <vf-m-location-thumb :location="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
