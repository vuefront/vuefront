<template>
  <div
    v-on="$listeners"
    :class="getClass"
    class="vf-m-button-group"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default() {
        return "md";
      }
    },
    block: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    getClass() {
      let result = []

      if (this.block) {
        result.push('vf-m-button-group--block')
      }

      result.push(`vf-m-button-group--${this.size}`)

      return result.join(' ')
    }
  }
};
</script>