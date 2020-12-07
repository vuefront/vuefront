<template>
  <div class="vf-m-media-start flex" :is="tag" :vertial-align="verticalAlign">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    right: {
      type: Boolean,
      default() {
        return false
      }
    },
    tag: {
      type: String,
      default: "div"
    },
    verticalAlign: {
      type: String,
      default: "top"
    }
  },
  computed: {
    asideClass() {
      let result = []

      if (this.verticalAlign === 'start' ||this.verticalAlign === 'top' ) {
        result.push('self-start')
      }
      if (this.verticalAlign === 'center') {
        result.push('self-center')
      }
      if (this.verticalAlign === 'end' ||this.verticalAlign === 'bottom' ) {
        result.push('self-end')
      }

      if (this.right) {
        result.push('ml-4')
      } else {
        result.push('mr-4')
      }

      return result.join(' ')
    }
  }
};
</script>
