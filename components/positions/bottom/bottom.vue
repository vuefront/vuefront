<template>
  <div class="py-3">
    <div v-for="(value, index) in modules" :key="index" :is="value.component" v-bind="value.props"></div>
  </div>
</template>
<script>
import {BaseLayout} from '~/utils/baseLayout'

export default {
  name: 'vfDefaultPositionsBottom',
  data() {
    return {
      position: 'contentBottom'
    }
  },
  mixins: [BaseLayout]
}
</script>
