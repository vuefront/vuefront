<template>
  <section class="vf-o-location-grid">
    <vf-m-row>
      <vf-m-col v-for="(value, index) in items" :key="index" xs="12" md="4">
        <vf-m-location-thumb :location="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
