<template>
  <div class="home-page__latest_products mb-5">
    <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Latest products
    </div>
    <vf-products-grid :products="latestProducts.content"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import LatestProductGraphql from '~/types/graphql/modules/latestProduct.graphql'

@Component({
  apollo: {
    latestProducts: LatestProductGraphql
  }
})
export default class extends Vue {
}
</script>
