<template>
  <section class="product-category">
    <sf-products-grid :products="products.content"/>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import productListGql from '~/types/graphql/store/product/list.graphql'
import {Pagination, Product} from "~/types";

@Component({
  head() {
    return {
      title: 'Products list',
      meta: [
        { hid: 'description', name: 'description', content: 'List all products' }
      ]
    }
  }
})
export default class extends Vue {
  @Getter('store/product/list') products!: Pagination<Product>

  async fetch({store, route}) {
    const page = route.query.page ? Number(route.query.page) : 1
    await store.dispatch('apollo/query', {
      query: productListGql,
      variables: {page, size: 12, categoryId: 0}
    })
    const {productsList} = store.getters['apollo/get']
    store.commit('store/product/setEntities', productsList)
  }
}
</script>
