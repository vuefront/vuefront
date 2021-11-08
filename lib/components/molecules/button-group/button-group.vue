<template>
  <div :class="getClass" class="vf-m-button-group" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  size: {
    type: String as PropType<Sizes>,
    default() {
      return "md";
    },
  },
  block: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
enum Sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}
const getSizes = {
  sm: "vf-m-button-group--sm",
  md: "vf-m-button-group--md",
  lg: "vf-m-button-group--lg",
};

const getClass = computed(() => {
  const result = [];

  if (props.block) {
    result.push("vf-m-button-group--block");
  }

  result.push(getSizes[props.size]);

  return result.join(" ");
});
</script>
