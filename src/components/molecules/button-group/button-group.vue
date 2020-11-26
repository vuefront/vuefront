<template>
  <div
    v-on="$listeners"
    :class="{'vf-m-button-group--block': block}"
    class="vf-m-button-group"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
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