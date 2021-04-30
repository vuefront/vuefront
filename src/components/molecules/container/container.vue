<template>
  <div
    class="vf-m-container"
    :class="{
      'vf-m-container--fluid': fluid,
      'vf-m-container--sm': size === 'sm',
      'vf-m-container--lg': size === 'lg',
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default() {
        return false;
      },
    },
    size: {
      type: String,
      default() {
        return null;
      },
    },
  },
};
</script>