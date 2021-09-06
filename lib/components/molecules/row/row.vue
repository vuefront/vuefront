<template>
  <div class="vf-m-row" :class="getClass">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default() {
      return "div";
    },
  },
  noGutters: {
    type: Boolean,
    default() {
      return false;
    },
  },
  alignV: {
    type: String,
    default() {
      return null;
    },
  },
  alignH: {
    type: String,
    default() {
      return null;
    },
  },
});

const getAlignV = {
  start: "--align-v-start",
  center: "--align-v-center",
  end: "--align-v-end",
};

const getAlignH = {
  start: "--align-h-start",
  center: "--align-h-center",
  end: "--align-h-end",
};

const getClass = computed(() => {
  const result = [];

  if (props.noGutters) {
    result.push("--no-gutter");
  }

  if (props.alignV) {
    result.push("--align-v-" + props.alignV);
  }

  if (props.alignH) {
    result.push("--align-h-" + props.alignH);
  }

  return result.join(" ");
});
</script>
