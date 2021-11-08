<template>
  <component :is="tag" class="vf-a-heading" :class="getClass">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";

const props = defineProps({
  level: {
    type: [Number, String] as PropType<number | string>,
    default() {
      return 1;
    },
  },
  tag: {
    type: String,
    default() {
      return "div";
    },
  },
});
/**
 * vf-a-heading--1
 * vf-a-heading--2
 * vf-a-heading--3
 * vf-a-heading--4
 * vf-a-heading--5
 * vf-a-heading--6
 */
const getClass = computed(() => {
  const result = [];

  if (props.level > 0 && props.level < 7)
    result.push(`vf-a-heading--${props.level}`);

  return result.join(" ");
});
</script>
