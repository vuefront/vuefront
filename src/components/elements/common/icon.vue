<template>
    <i :class="currentIcon"></i>
</template>
<script>
import {isArray, join} from 'lodash'
export default {
    props: ['icon', 'size'],
    computed: {
      currentIcon() {
        if(isArray(this.icon)) {
          return join(this.icon, ' fa-')
        } else {
          return `fas fa-${this.icon}`
        }
      }
    }
}
</script>
