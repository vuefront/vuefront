<template>
  <div class="grid" :class="getClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default() {
        return "div";
      }
    },
    cols: {
      type: [Number, String],
      default() {
        return 12
      }
    },
    noGutters: {
      type: Boolean,
      default() {
        return false;
      }
    },
    alignV: {
      type: String,
      default() {
        return null;
      }
    },
    alignH: {
      type: String,
      default() {
        return null;
      }
    }
  },
  computed: {
    getClass() {
      const result = []

      if (!this.noGutters) {
        result.push('gap-4')
      }

      result.push(`grid-cols-${this.cols}`)

      return result.join(' ')
    }
  }
};
</script>