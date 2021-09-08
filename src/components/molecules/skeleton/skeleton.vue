<template>
  <Skeletor :width="width" :height="height"></Skeletor>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
defineProps({
  width: {
    type: String,
    default: () => null,
  },
  height: {
    type: String,
    default: () => null,
  },
});
</script>
