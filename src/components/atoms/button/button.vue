<template>
  <b-button
    v-on="$listeners"
    v-bind="$attrs"
    :variant="color"
    :to="to"
    :nuxt="nuxt"
    :disabled="disabled"
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
