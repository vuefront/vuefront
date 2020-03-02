<template>
  <b-badge class="vf-a-badge" :variant="color" :pill="rounded">
    <slot></slot>
  </b-badge>
</template>
<script>
import { BBadge } from "bootstrap-vue";
export default {
  name: 'vf-a-badge',
  components: {
    BBadge
  },
  props: {
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    rounded: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
