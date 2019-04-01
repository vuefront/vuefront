<template>
  <v-app>
    <Layout>
      <nuxt/>
    </Layout>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import Layout from '~/components/layout.vue'

@Component({
  components: {
    Layout
  }
})
export default class extends Vue {
}
</script>