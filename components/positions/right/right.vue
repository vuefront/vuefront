<template>
  <div class="px-2">
    <div v-for="(value, index) in modules" :key="index" :is="value.component" v-bind="value.props"></div>
  </div>
</template>
<script>
import {BaseLayout} from '~/utils/baseLayout'

export default {
  name: 'vfDefaultPositionsRight',
  data() {
    return {
      position: 'columnRright'
    }
  },
  mixins: [BaseLayout]
}
</script>
