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

      if (Number(this.level) === 1) {
        result.push('text-4xl font-extrabold text-dark mb-3.5')
      }
      if (Number(this.level) === 2) {
        result.push('text-2xl font-bold text-dark mb-4')
      }
      if (Number(this.level) === 3) {
        result.push('text-xl font-semibold text-dark mb-2.5')
      }
      if (Number(this.level) === 4) {
        result.push('text-base font-semibold text-dark mb-2')
      }
      if (Number(this.level) === 5) {
        result.push('text-base font-semibold text-dark mb-2')
      }
      if (Number(this.level) === 6) {
        result.push('text-base font-semibold text-dark mb-2')
      }

      return result.join(' ')
    }
  }
};
</script>