<template>
  <svg-icon
    type="mdi"
    :path="icon"
    :size="Number(size)"
    :viewbox="getViewBox"
    class="vf-a-icon"
  ></svg-icon>
</template>
<script lang="ts" setup>
import SvgIcon from "@jamescoyle/vue-icon/lib/svg-icon.vue";
import { computed, PropType } from "vue";
const props = defineProps({
  test: {
    type: String,
    default() {
      return "ab-testing";
    },
  },
  size: {
    type: [Number, String] as PropType<number | string>,
    default() {
      return 15;
    },
  },
  icon: {
    type: String,
    default() {
      return null;
    },
  },
});
const getViewBox = computed(() => {
  if (props.size >= 24) {
    return `0 0 ${props.size} ${props.size}`;
  }
  return "0 0 24 24";
});
</script>
