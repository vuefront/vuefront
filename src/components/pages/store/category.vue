<template>
  <section class="store-category-page">
    <template v-if="loaded">
      <vf-template-category
        :category="category"
        :products="products"
        :mode="mode"
        :sort="sort"
        :grid-size="gridSize"
      />
    </template>
    <template v-else>
      <vf-loader-category-page :grid-size="gridSize"/>
    </template>
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
    const page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    const size = this.$route.query.size ? Number(this.$route.query.size) : 15;
    const sort = this.$route.query.sort ? this.$route.query.sort : "id";
    const order = this.$route.query.order ? this.$route.query.order : "ASC";
    return {
      loaded: true,
      size,
      sort: `${sort}|${order}`,
      page
    };
  },
  props: ["id", "keyword", "url"],
  mixins: [BaseModule],
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  asyncData() {
    return {
      loaded: !process.client
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
    },
    gridSize() {
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
        return 2;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        return 3;
      } else {
        return 4;
      }
    }
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  watchQuery: true,
  watch: {
    loaded(newValue, oldValue) {
      if(!newValue && oldValue) {
        this.handleLoadData();
      }
    },
  },
  methods: {
    async handleLoadData(ctx) {
      let { id } = this.$vuefront.params;
      const sortData = this.sort.split("|");
      await this.$store.dispatch("apollo/query", {
        query: categoryPageGql,
        variables: {
          page: this.page,
          size: this.size,
          categoryId: id,
          sort: sortData[0],
          order: sortData[1]
        }
      });
      const { productsList, category } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setEntities", productsList);
      this.$store.commit("store/category/setCategory", category);
      this.loaded = true;
    }
  }
};
</script>
