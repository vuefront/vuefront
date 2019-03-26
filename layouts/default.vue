<template>
  <v-app>
    <Header/>
    <v-container pa-0>
      <div class="main-content">
        <nuxt/>
      </div>
    </v-container>
    <Footer/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class extends Vue {
}
</script>
<style type="scss">
.main-content {
  padding-top: 65px;
}
</style>