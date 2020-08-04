<template>
  <router-link class="vf-a-link" :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String | Object,
      default() {
        return "/";
      }
    }
  }
};
</script>
<style lang="scss">
@import './link';
</style>