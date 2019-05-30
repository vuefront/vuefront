<template>
  <section class="product-category">
    <vf-category :category="category" class="mb-5"/>
    <vf-sort
      v-if="products.content.length > 0"
      :sorts="sortOptions"
      :sizes="sizeOptions"
      :size="size"
      :sort="sort"
      :mode="mode"
      @changeSize="handleChangeSize"
      @changeSort="handleChangeSort"
      @changeMode="handleChangeMode"
    />
    <vf-products-grid
      v-if="products.content.length > 0"
      :products="products.content"
      :list="isList"
      :grid-size="gridSize"
      class="mb-4"
    />
    <vf-empty
      v-if="products.content.length === 0"
      class="text-sm-center"
    >{{$t('templates.store.category.emptyText')}}</vf-empty>
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import categoryPageGql from "~/graphql/store/category/page.graphql";
import { BaseModule } from "~/utils/module.js";
export default {
  head() {
    return {
      title: this.category.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.description
        }
      ]
    };
  },
  data() {
    return {
      sizeOptions: [
        {
          text: this.$t('templates.store.category.15Text'),
          value: 15
        },
        {
          text: this.$t('templates.store.category.25Text'),
          value: 25
        },
        {
          text: this.$t('templates.store.category.50Text'),
          value: 50
        },
        {
          text: this.$t('templates.store.category.75Text'),
          value: 75
        },
        {
          text: this.$t('templates.store.category.100Text'),
          value: 100
        }
      ],
      sortOptions: [
        {
          text: this.$t('templates.store.category.defaultSortText'),
          value: "id|ASC"
        },
        {
          text: this.$t('templates.store.category.nameAscSortText'),
          value: "name|ASC"
        },
        {
          text: this.$t('templates.store.category.nameDescSortText'),
          value: "name|DESC"
        },
        {
          text: this.$t('templates.store.category.priceAscSortText'),
          value: "price|ASC"
        },
        {
          text: this.$t('templates.store.category.priceDescSortText'),
          value: "price|DESC"
        },
        {
          text: this.$t('templates.store.category.ratingAscSortText'),
          value: "rating|ASC"
        },
        {
          text: this.$t('templates.store.category.ratingDescSortText'),
          value: "rating|DESC"
        },
        {
          text: this.$t('templates.store.category.modelAscSortText'),
          value: "model|ASC"
        },
        {
          text: this.$t('templates.store.category.modelDescSortText'),
          value: "model|DESC"
        }
      ]
    };
  },
  mixins: [BaseModule],
  computed: {
    ...mapGetters({
      category: "store/category/get",
      mode: "store/category/mode",
      products: "store/product/list"
    }),
    isList() {
      return this.mode === "list";
    },
    gridSize() {
        if(this.checkModules('columnLeft') && this.checkModules('columnRight')) {
            return 2
        } else if(this.checkModules('columnLeft') || this.checkModules('columnRight')) {
            return 3
        } else {
            return 4
        }
    }
  },
  async asyncData({ store, route, app }) {
    const page = route.query.page ? Number(route.query.page) : 1;
    const size = route.query.size ? Number(route.query.size) : 15;
    const sort = route.query.sort ? route.query.sort : "id";
    const order = route.query.order ? route.query.order : "ASC";
    let {id} = app.$vuefront.params

    await store.dispatch("apollo/query", {
      query: categoryPageGql,
      variables: { page, size, categoryId: id, sort, order }
    });
    const { productsList, category } = store.getters["apollo/get"];
    store.commit("store/product/setEntities", productsList);
    store.commit("store/category/setCategory", category);

    return {
      page: page,
      totalPages: productsList.totalPages,
      size,
      sort: `${sort}|${order}`
    };
  },
  watchQuery: true,
  methods: {
    async handleChangePage(page) {
      let {id} = this.$vuefront.params
      this.$router.push({
        path: "/store/category/" + id,
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");
      let {id} = this.$vuefront.params
      this.$router.push({
        path: "/store/category/" + id,
        query: { size: this.size.toString(), sort: sorts[0], order: sorts[1] }
      });
    },

    handleChangeMode(mode) {
      this.$store.commit("store/category/setMode", mode);
    },

    handleChangeSize(size) {
      const sorts = this.sort.split("|");

      let {id} = this.$vuefront.params

      this.$router.push({
        path: "/store/category/" + id,
        query: { size: size.toString(), sort: sorts[0], order: sorts[1] }
      });
    }
  }
};
</script>
