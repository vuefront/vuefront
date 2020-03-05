<template>
  <section class="vf-o-location-grid">
    <vf-m-row>
      <vf-m-col v-for="(value, index) in items" :key="index" sm="12" md="4">
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
<style>
.vf-m-col {
  align-items: ;
}
</style>
