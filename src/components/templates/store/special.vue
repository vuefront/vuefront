<template>
  <section class="product-category">
    <div class="text-sm-center h1 mb-5">Special</div>
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
    >There are no products to list in this category.</vf-empty>
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
      title: 'Special',
      meta: [
        {
          hid: "description",
          name: "description",
          content: 'Special'
        }
      ]
    };
  },
  data() {
    return {
      sizeOptions: [
        {
          text: "15",
          value: 15
        },
        {
          text: "25",
          value: 25
        },
        {
          text: "50",
          value: 50
        },
        {
          text: "75",
          value: 75
        },
        {
          text: "100",
          value: 100
        }
      ],
      sortOptions: [
        {
          text: "Default",
          value: "id|ASC"
        },
        {
          text: "Name (A - Z)",
          value: "name|ASC"
        },
        {
          text: "Name (Z - A)",
          value: "name|DESC"
        },
        {
          text: "Price (Low > High)",
          value: "price|ASC"
        },
        {
          text: "Price (High > Low)",
          value: "price|DESC"
        },
        {
          text: "Rating (Highest)",
          value: "rating|ASC"
        },
        {
          text: "Rating (Lowest)",
          value: "rating|DESC"
        },
        {
          text: "Model (A - Z)",
          value: "model|ASC"
        },
        {
          text: "Model (Z - A)",
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
