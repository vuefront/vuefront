<template>
  <div :is="tag" class="vf-m-media-body">
    <slot></slot>
  </div>
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
