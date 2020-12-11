<template>
  <svg-icon type="mdi" :path="icon" :size="Number(size)" :viewbox="getViewBox" class="vf-a-icon" ></svg-icon>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon/lib/svg-icon.vue'
export default {
  props: {
    test: {
      type: String,
      default() {
        return 'ab-testing'
      }
    },
    size: {
      type: Number | String,
      default() {
        return 15
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
  components: {
    SvgIcon
  },
  computed: {
    getViewBox() {
      if (this.size >= 24) {
        return `0 0 ${this.size} ${this.size}`
      }
      return '0 0 24 24'
    }
  }
};
</script>