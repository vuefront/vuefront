<template>
  <div>
    <div v-for="(value, index) in modules" :key="index" :is="value.component" v-bind="value.props"></div>
  </div>
</template>
<script>
import {BaseLayout} from '~/utils/baseLayout.js'

export default {
  props: {
    name: String
  },
  data() {
    return {
      position: this.name
    }
  },
  mixins: [BaseLayout]
}
</script>
