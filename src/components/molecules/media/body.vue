<template>
  <component :is="tag" class="vf-m-media-body">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
defineProps({
  tag: {
    type: String,
    default: "div",
  },
});
</script>
