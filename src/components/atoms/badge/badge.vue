<template>
  <span class="vf-a-badge px-2 py-1 text-xs text-bold" :class="getClass">
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

      result.push('bg-'+this.color)
      result.push('text-'+this.color + '-inverted')
      result.push('hover:bg-'+this.color+'-darker')

      if (this.rounded) {
        result.push('rounded-full')
      } else {
        result.push('rounded')
      }

      return result.join(' ')
    }
  }
};
</script>