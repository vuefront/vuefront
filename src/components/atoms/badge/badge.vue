<template>
  <span class="vf-a-badge" :class="getClass">
    <slot></slot>
  </span>
</template>
<script setup lang="ts">
import { computed, PropType } from "@vue/runtime-core";

enum Colors {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
  white = "white",
  light = "light",
  dark = "dark",
}

const props = defineProps({
  color: {
    type: String as PropType<Colors>,
    default() {
      return "primary";
    },
  },
  rounded: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
const getColors = {
  primary: "vf-a-badge--primary",
  secondary: "vf-a-badge--secondary",
  success: "vf-a-badge--success",
  info: "vf-a-badge--info",
  warning: "vf-a-badge--warning",
  danger: "vf-a-badge--danger",
  white: "vf-a-badge--white",
  light: "vf-a-badge--light",
  dark: "vf-a-badge--dark",
};
const getClass = computed(() => {
  const result: string[] = [];

  result.push(getColors[props.color]);

  if (props.rounded) {
    result.push("vf-a-badge--rounded");
  }

  return result.join(" ");
});
</script>
