<template>
  <router-link no-prefetch class="vf-a-link" :to="to ? to : '/'">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default() {
        return "/";
      },
    },
  },
};
</script>
