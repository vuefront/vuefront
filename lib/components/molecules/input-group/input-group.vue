<template>
  <component
    :is="tag"
    :id="id"
    :size="size"
    class="vf-m-input-group"
    :class="getClass"
  >
    <div v-if="$slots.prepend || prepend" class="vf-m-input-group__prepend">
      <slot name="prepend">
        <div class="vf-m-input-group__text">
          {{ prepend }}
        </div>
      </slot>
    </div>
    <slot></slot>
    <div v-if="$slots.append || append" class="vf-m-input-group__append">
      <slot name="append">
        <div class="vf-m-input-group__text">
          {{ append }}
        </div>
      </slot>
    </div>
  </component>
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";

enum Sizes {
  "sm" = "sm",
  "md" = "md",
  "lg" = "lg",
}
const props = defineProps({
  id: {
    type: String,
    default() {
      return null;
    },
  },
  size: {
    type: String as PropType<Sizes>,
    default() {
      return null;
    },
  },
  prepend: {
    type: String,
    default() {
      return null;
    },
  },
  prependHtml: {
    type: String,
    default() {
      return null;
    },
  },
  append: {
    type: String,
    default() {
      return null;
    },
  },
  appendHtml: {
    type: String,
    default() {
      return null;
    },
  },
  tag: {
    type: String,
    default() {
      return "div";
    },
  },
});
const getSizes = {
  sm: "vf-m-input-group--sm",
  md: "vf-m-input-group--md",
  lg: "vf-m-input-group--lg",
};
const getClass = computed(() => {
  const result = [];

  result.push(getSizes[props.size]);

  return result.join(" ");
});
</script>
