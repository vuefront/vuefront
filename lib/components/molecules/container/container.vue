<template>
  <div
    class="vf-m-container px-4"
    :class="{
      'vf-m-container--fluid': fluid,
      'container mx-auto': !fluid,
      'sm:container': size === 'sm',
      'lg:container': size === 'lg',
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
