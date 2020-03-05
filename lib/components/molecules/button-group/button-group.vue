<template>
  <b-button-group
    v-on="$listeners"
    :size="size"
    :class="{'vf-m-button-group--block': block}"
    class="vf-m-button-group"
  >
    <slot></slot>
  </b-button-group>
</template>
<script>
import './button-block.scss'
import { BButtonGroup } from "bootstrap-vue";
export default {
  components: { BButtonGroup },
  props: {
    size: {
      type: String,
      default() {
        return "sm";
      }
    },
    block: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
