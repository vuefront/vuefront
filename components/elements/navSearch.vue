<template>
  <div>
    <v-text-field
      v-model="keyword"
      label="Search"
      class="ma-0 pa-0"
      hide-details
      @keypress="handleKeyPress"
    />
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class extends Vue {

  keyword: string = ''

  beforeMount() {
    if (this.$route.matched[0].path === '/search/:slug?') {
      this.keyword = this.$route.params.slug
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.$router.push(`/search/${this.keyword}`)
    }
  }

}
</script>