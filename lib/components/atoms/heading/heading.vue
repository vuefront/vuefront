<template>
  <div class="vf-a-heading" :is="tag" :class="`h${level}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vf-a-heading',
  props: {
    level: {
      type: [Number, String],
      default() {
        return 1;
      }
    },
    tag: {
      type: String,
      default() {
        return "div";
      }
    }
  }
};
</script>
