<template>
  <div class="flex flex-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default() {
        return "div";
      }
    },
    noGutters: {
      type: Boolean,
      default() {
        return false;
      }
    },
    alignV: {
      type: String,
      default() {
        return null;
      }
    },
    alignH: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>