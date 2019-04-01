<template>
  <div>
    <Header/>
    <v-container pa-0>
      <div class="main-content">
        <ContentTop/>
        <v-layout row>
          <v-flex v-if="checkModules('columnLeft')" xs3 hidden-sm-and-down>
            <ColumnLeft/>
          </v-flex>
          <v-flex xs-fill>
            <slot></slot>
          </v-flex>
          <v-flex v-if="checkModules('columnRight')" xs3 hidden-sm-and-down>
            <ColumnRight/>
          </v-flex>
        </v-layout>
        <ContentBottom/>
      </div>
    </v-container>
    <Footer/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import ContentTop from '~/components/layouts/contentTop.vue'
import ContentBottom from '~/components/layouts/contentBottom.vue'
import ColumnLeft from '~/components/layouts/columnLeft.vue'
import ColumnRight from '~/components/layouts/columnRight.vue'
import {BaseModule} from '~/utils/module'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    ContentTop,
    ContentBottom,
    ColumnLeft,
    ColumnRight,
    Header,
    Footer
  }
})
export default class extends BaseModule {

}
</script>
<style type="scss">
.main-content {
  padding-top: 65px;
}
</style>