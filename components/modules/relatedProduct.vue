<template>
  <div class="home-page__latest_products mb-5" v-if="product && product.products && product.products.length > 0">
    <div class="home-page__latest_products_title text-xs-center mb-5 subheading font-weight-medium">Suggested
      products
    </div>
    <vf-products-grid :products="product.products"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import {isUndefined} from 'lodash'
import {Product} from "~/types";

@Component
export default class extends Vue {

  @Getter('store/product/get') product!: Product

  get schema() {
    console.log(require('~/types/graphql/modules/relatedProduct.graphql'))
    return require('~/types/graphql/modules/relatedProduct.graphql')
  }
}
</script>
