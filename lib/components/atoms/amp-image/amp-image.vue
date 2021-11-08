<template>
  <amp-img
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :title="title"
    :layout="layout"
    class="vf-a-amp-image"
  />
</template>
<script setup lang="ts">
import { PropType } from "vue";
defineProps({
  alt: {
    type: String,
    default() {
      return "";
    },
  },
  title: {
    type: String,
    default() {
      return "";
    },
  },
  src: {
    type: String,
    default() {
      return "";
    },
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  layout: {
    type: String,
    default() {
      return "";
    },
  },
});
</script>
