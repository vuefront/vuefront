<template>
  <img :src="require(`@mdi/svg/svg/${icon}.svg`)" alt="" :width="getSize" class="vf-a-icon">
</template>
<script>
export default {
  props: {
    test: {
      type: String,
      default() {
        return 'ab-testing'
      }
    },
    size: {
      type: Number,
      default() {
        return 16
      }
    },
    icon: {
      type: String,
      default() {
        return null
      }
    },
    img: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    getSize() {
      if (this.size === 1) {
        return 16
      }

      return 24
    }
  }
};
</script>