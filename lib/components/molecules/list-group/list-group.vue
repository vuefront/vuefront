<template>
  <b-list-group>
    <slot></slot>
  </b-list-group>
</template>
<script>
  import {BListGroup} from 'bootstrap-vue'

  export default {
    components: {
      BListGroup
    }
  }
</script>