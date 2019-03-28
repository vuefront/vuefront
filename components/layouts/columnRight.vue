<template>
  <div class="px-2">
    <div v-for="(value, index) in modules" :key="index" :is="value.component" v-bind="value.props"></div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {BaseLayout} from '~/utils/baseLayout'

@Component
export default class extends BaseLayout {
  position: string = 'columnRight'
}
</script>