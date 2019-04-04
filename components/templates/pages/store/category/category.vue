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
      class="mb-4"
    />
    <vf-empty
      v-if="products.content.length === 0"
      class="text-xs-center"
    >There are no products to list in this category.</vf-empty>
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
      class="mb-5"
    />
    <vf-pagination :page="page" :totalPages="totalPages" @input="handleChangePage"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import categoryPageGql from "~/graphql/store/category/page.graphql";
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
  computed: {
    ...mapGetters({
      category: "store/category/get",
      mode: "store/category/mode",
      products: "store/product/list"
    }),
    isList() {
      return this.mode === "list";
    }
  },
  async asyncData({ store, route, params: { id } }) {
    const page = route.query.page ? Number(route.query.page) : 1;
    const size = route.query.size ? Number(route.query.size) : 15;
    const sort = route.query.sort ? route.query.sort : "id";
    const order = route.query.order ? route.query.order : "ASC";
    await store.dispatch("apollo/query", {
      query: categoryPageGql,
      variables: { page, size, categoryId: Number(id), sort, order }
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
      this.$router.push({
        path: "/store/category/" + this.$route.params.id,
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");
      this.$router.push({
        path: "/store/category/" + this.$route.params.id,
        query: { size: this.size.toString(), sort: sorts[0], order: sorts[1] }
      });
    },

    handleChangeMode(mode) {
      this.$store.commit("store/category/setMode", mode);
    },

    handleChangeSize(size) {
      const sorts = this.sort.split("|");

      this.$router.push({
        path: "/store/category/" + this.$route.params.id,
        query: { size: size.toString(), sort: sorts[0], order: sorts[1] }
      });
    }
  }
};
</script>
