<template>
  <component
    :is="tag"
    class="vf-m-media-start flex"
    :vertial-align="verticalAlign"
  >
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  right: {
    type: Boolean,
    default() {
      return false;
    },
  },
  tag: {
    type: String,
    default: "div",
  },
  verticalAlign: {
    type: String,
    default: "top",
  },
});
const asideClass = computed(() => {
  const result = [];

  if (props.verticalAlign === "start" || props.verticalAlign === "top") {
    result.push("self-start");
  }
  if (props.verticalAlign === "center") {
    result.push("self-center");
  }
  if (props.verticalAlign === "end" || props.verticalAlign === "bottom") {
    result.push("self-end");
  }

  if (props.right) {
    result.push("ml-4");
  } else {
    result.push("mr-4");
  }

  return result.join(" ");
});
</script>
