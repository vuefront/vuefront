<template>
  <section class="product-category">
    <sf-category :category="category" class="mb-5"/>
    <sf-products-grid :products="products.content" class="mb-5"/>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import categoryPageGql from '~/types/graphql/store/category/page.graphql'
import {Pagination, Product, Category} from "~/types";

@Component({
  head() {
    return {
      title: (this as any).category.name,
      meta: [
        {hid: 'description', name: 'description', content: (this as any).category.description}
      ]
    }
  }
})
export default class extends Vue {
  @Getter('store/category/get') category!: Category
  @Getter('store/product/list') products!: Pagination<Product>

  async fetch({store, route, params: {id}}) {
    const page = route.query.page ? Number(route.query.page) : 1
    await store.dispatch('apollo/query', {
      query: categoryPageGql,
      variables: {page, size: 12, categoryId: Number(id)}
    })
    const {productsList, category} = store.getters['apollo/get']
    store.commit('store/product/setEntities', productsList)
    store.commit('store/category/setCategory', category)
  }
}
</script>
