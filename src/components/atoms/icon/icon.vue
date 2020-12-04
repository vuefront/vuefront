<template>
  <svg-icon type="mdi" :path="getPath" :size="size" class="vf-a-icon" ></svg-icon>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon/lib/svg-icon.vue'
import * as icons from '@mdi/js'
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
    getPath() {
      let path = 'mdi' + this.icon.split('-').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join('')

      return icons[path]
    }
  }
};
</script>