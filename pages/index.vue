<template>
  <section class="home-page"></section>
</template>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'Purpose'
    }
  }
})
export default class extends Vue {
}
</script>
