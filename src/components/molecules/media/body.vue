<template>
  <component :is="tag" class="vf-m-media-body">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>
