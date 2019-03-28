<template>
  <div>
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
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import ContentTop from '~/components/layouts/contentTop.vue'
import ContentBottom from '~/components/layouts/contentBottom.vue'
import ColumnLeft from '~/components/layouts/columnLeft.vue'
import ColumnRight from '~/components/layouts/columnRight.vue'
import {BaseModule} from '~/utils/module'

@Component({
  components: {ContentTop, ContentBottom, ColumnLeft, ColumnRight}
})
export default class extends BaseModule {

}
</script>