<template>
  <vf-product :product="product"/>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import productGetGql from '~/types/graphql/store/product/get.graphql'
import {Product} from "~/types";

@Component({
  head() {
    return {
      title: (this as any).product.name,
      meta: [
        { hid: 'description', name: 'description', content: (this as any).product.shortDescription }
      ]
    }
  }
})
export default class extends Vue {
  @Getter('store/product/get') product!: Product

  async fetch({store, app, params}) {
    await store.dispatch('apollo/query', {
      query: productGetGql,
      variables: {id: Number(params.id), limit: 3, productLimit: 4}
    })
    const {product} = store.getters['apollo/get']
    store.commit('store/product/setProduct', product)
  }
}
</script>