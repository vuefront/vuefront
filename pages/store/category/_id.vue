<template>
  <section class="product-category">
    <vf-category :category="category" class="mb-5"/>
    <vf-products-grid :products="products.content" class="mb-5"/>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
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
  },
  watchQuery: true
})
export default class extends Vue {
  @Getter('store/category/get') category!: Category
  @Getter('store/product/list') products!: Pagination<Product>

  async handleChangePage(page) {
    this.$router.push({
      path: '/store/category/' + this.$route.params.id,
      query: {page}
    })
  }

  async asyncData({store, route, params: {id}}) {
    const page = route.query.page ? Number(route.query.page) : 1
    await store.dispatch('apollo/query', {
      query: categoryPageGql,
      variables: {page, size: 12, categoryId: Number(id)}
    })
    const {productsList, category} = store.getters['apollo/get']
    store.commit('store/product/setEntities', productsList)
    store.commit('store/category/setCategory', category)

    return {
      page: page,
      totalPages: productsList.totalPages
    }
  }
}
</script>
