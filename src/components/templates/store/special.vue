<template>
  <section class="product-category">
    <div class="text-sm-center h1 mb-5">{{$t('templates.store.special.textTitle')}}</div>
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
import specialPageGql from "~/graphql/store/category/special.graphql";
import { BaseModule } from "~/utils/module.js";
export default {
  head() {
    return {
      title: this.$t('templates.store.special.textTitle'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('templates.store.special.textTitle')
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
  async asyncData({ store, route }) {
    const page = route.query.page ? Number(route.query.page) : 1;
    const size = route.query.size ? Number(route.query.size) : 15;
    const sort = route.query.sort ? route.query.sort : "id";
    const order = route.query.order ? route.query.order : "ASC";
    await store.dispatch("apollo/query", {
      query: specialPageGql,
      variables: { page, size, sort, order }
    });
    const { productsList } = store.getters["apollo/get"];
    store.commit("store/product/setEntities", productsList);

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
      this.$router.push({
        path: "/store/special",
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");
      this.$router.push({
        path: "/store/special",
        query: { size: this.size.toString(), sort: sorts[0], order: sorts[1] }
      });
    },

    handleChangeMode(mode) {
      this.$store.commit("store/category/setMode", mode);
    },

    handleChangeSize(size) {
      const sorts = this.sort.split("|");

      this.$router.push({
        path: "/store/special",
        query: { size: size.toString(), sort: sorts[0], order: sorts[1] }
      });
    }
  }
};
</script>
