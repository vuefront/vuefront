<template>
  <li class="vf-m-breadcrumb__item">
    <vf-a-link :to="to">
      <slot></slot>
    </vf-a-link>
  </li>
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
