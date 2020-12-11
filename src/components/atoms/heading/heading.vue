<template>
  <div class="vf-a-heading" :is="tag" :class="getClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
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
  },
  computed: {
    getClass() {
      const result = []

      result.push(`vf-a-heading--${this.level}`)

      return result.join(' ')
    }
  }
};
</script>