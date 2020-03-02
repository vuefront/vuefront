<template>
  <router-link class="vf-a-link" :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  name: 'vf-a-link',
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
