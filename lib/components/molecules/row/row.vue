<template>
  <div class="flex flex-wrap" :class="getClass">
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
      let result = []

      if (!this.noGutters) {
        result.push('-mx-4')
      }

      if (this.alignV) {
        result.push('items-'+this.alignV)
      }

      if (this.alignH) {
        result.push('justify-'+this.alignH)
      }

      return result.join(' ')
    }
  }
};
</script>