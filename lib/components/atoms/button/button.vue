<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    :variant="color"
    :to="to"
    :nuxt="nuxt"
    :disabled="disabled"
    :pressed="pressed"
    :active="active"
    :type="type"
    :pill="rounded"
    :class="{'vf-a-button--animated': animatedX || animatedY, 'vf-a-button--animated-x': animatedX, 'vf-a-button--animated-y': animatedY }"
    class="vf-a-button"
  >
    <slot></slot>
    <span v-if="$slots.visible" class="vf-a-button__inner--visible">
      <slot name="visible"></slot>
    </span>
    <span v-if="$slots.hidden" class="vf-a-button__inner--hidden">
      <slot name="hidden"></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
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
      type: [String, Object],
      default() {
        return "";
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
  },
  inheritAttrs: false,
};
</script>