<template>
  <section class="product-category">
    <vf-category :category="category" class="mb-5"/>
    <vf-sort :sorts="sortOptions" :sizes="sizeOptions" :size="size" :sort="sort" @changeSize="handleChangeSize"
             @changeSort="handleChangeSort"/>
    <vf-products-grid :products="products.content" class="mb-5"/>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import categoryPageGql from '~/types/graphql/store/category/page.graphql'
import {Pagination, Product, Category, SizeItem, SortItem} from "~/types";

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
    const size = route.query.size ? Number(route.query.size) : 15
    const sort = route.query.sort ? route.query.sort : 'id'
    const order = route.query.order ? route.query.order : 'ASC'
    await store.dispatch('apollo/query', {
      query: categoryPageGql,
      variables: {page, size, categoryId: Number(id), sort, order}
    })
    const {productsList, category} = store.getters['apollo/get']
    store.commit('store/product/setEntities', productsList)
    store.commit('store/category/setCategory', category)

    return {
      page: page,
      totalPages: productsList.totalPages,
      size,
      sort: `${sort}|${order}`
    }
  }

  sizeOptions: SizeItem[] = [
    {
      text: '15',
      value: 15,
    },
    {
      text: '25',
      value: 25,
    },
    {
      text: '50',
      value: 50,
    },
    {
      text: '75',
      value: 75,
    },
    {
      text: '100',
      value: 100,
    }
  ]

  sortOptions: SortItem[] = [
    {
      text: 'Default',
      value: 'id|ASC'
    },
    {
      text: 'Name (A - Z)',
      value: 'name|ASC'
    },
    {
      text: 'Name (Z - A)',
      value: 'name|DESC'

    },
    {
      text: 'Price (Low > High)',
      value: 'price|ASC'
    },
    {
      text: 'Price (High > Low)',
      value: 'price|DESC'
    },
    {
      text: 'Rating (Highest)',
      value: 'rating|ASC'
    },
    {
      text: 'Rating (Lowest)',
      value: 'rating|DESC'
    },
    {
      text: 'Model (A - Z)',
      value: 'model|ASC'
    },
    {
      text: 'Model (Z - A)',
      value: 'model|DESC'
    },
  ]

  size!: number

  sort!: string

  handleChangeSort(sort: string) {
    const sorts: string[] = sort.split('|')
    this.$router.push({
      path: '/store/category/' + this.$route.params.id,
      query: {size: this.size.toString(), sort: sorts[0], order: sorts[1]}
    })
  }

  handleChangeSize(size: number) {
    const sorts: string[] = this.sort.split('|')

    this.$router.push({
      path: '/store/category/' + this.$route.params.id,
      query: {size: size.toString(), sort: sorts[0], order: sorts[1]}
    })
  }
}
</script>
