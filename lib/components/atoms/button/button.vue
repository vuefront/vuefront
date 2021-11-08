<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :disabled="disabled"
    :type="type"
    :class="getClass"
    class="vf-a-button"
    v-bind="$attrs"
  >
    <slot></slot>
    <span v-if="$slots.visible" class="btn-inner--visible">
      <slot name="visible"></slot>
    </span>
    <span v-if="$slots.hidden" class="btn-inner--hidden">
      <slot name="hidden"></slot>
    </span>
  </component>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  block: {
    type: Boolean,
    default() {
      return false;
    },
  },
  animatedY: {
    type: Boolean,
    default() {
      return null;
    },
  },
  animatedX: {
    type: Boolean,
    default() {
      return null;
    },
  },
  rounded: {
    type: Boolean,
    default() {
      return null;
    },
  },
  type: {
    type: String,
    default() {
      return "button";
    },
  },
  active: {
    type: Boolean,
    default() {
      return null;
    },
  },
  outline: {
    type: Boolean,
    default() {
      return null;
    },
  },
  size: {
    type: String,
    default() {
      return "md";
    },
  },
  pressed: {
    type: Boolean,
    default() {
      return false;
    },
  },
  color: {
    type: String,
    default() {
      return "primary";
    },
  },
  to: {
    type: [String, Object] as PropType<String | Object>,
    default() {
      return null;
    },
  },
  nuxt: {
    type: Boolean,
    default() {
      return false;
    },
  },
  disabled: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

const getClass = computed(() => {
  const result: string[] = [];

  if (props.disabled) {
    result.push("disabled:opacity-50");
  }
  if (props.active || props.pressed) {
    result.push("active");
  }
  if (props.outline) {
    result.push(`vf-a-button--outline-${props.color}`);
  } else {
    result.push(`vf-a-button--${props.color}`);
  }

  if (props.block) {
    result.push("w-full");
  }

  result.push(`vf-a-button--${props.size}`);

  if (props.rounded) {
    result.push("vf-a-button--rounded");
  }

  if (props.animatedX || props.animatedY) {
    result.push("vf-a-button--animated");
  }

  if (props.animatedX) {
    result.push("vf-a-button--animated-x");
  }

  if (props.animatedY) {
    result.push("vf-a-button--animated-y");
  }

  return result.join(" ");
});
</script>
