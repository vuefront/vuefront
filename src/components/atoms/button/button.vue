<template>
  <b-button
    v-on="$listeners"
    v-bind="$attrs"
    :variant="color"
    :to="to"
    :nuxt="nuxt"
    :disabled="disabled"
    :pressed="pressed"
    :active="active"
  >
    <slot></slot>
  </b-button>
</template>
<script>
import { BButton } from "bootstrap-vue";
export default {
  components: {
    BButton
  },
  props: {
    active: {
      type: Boolean,
      default() {
        return null;
      }
    },
    pressed: {
      type: Boolean,
      default() {
        return false;
      }
    },
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    to: {
      type: [String, Object],
      default() {
        return "";
      }
    },
    nuxt: {
      type: Boolean,
      default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  inheritAttrs: false
};
</script>
