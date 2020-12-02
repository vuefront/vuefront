<template>
  <span class="vf-a-badge" :class="getClass">
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default() {
        return "primary";
      }
    },
    rounded: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    getClass() {
      const result = []

      result.push('vf-a-badge--'+this.color)

      if (this.rounded) {
        result.push('vf-a-badge--rounded')
      }

      return result.join(' ')
    }
  }
};
</script>