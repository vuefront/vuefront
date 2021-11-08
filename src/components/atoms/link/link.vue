<template>
  <router-link class="vf-a-link" :to="to ? to : '/'">
    <slot></slot>
  </router-link>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  to: {
    type: [String, Object] as PropType<string | object>,
    default() {
      return "/";
    },
  },
});
</script>
