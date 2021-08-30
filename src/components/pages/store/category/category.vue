<template>
  <vf-t-common-layout>
    <template v-if="loaded">
      <vf-t-store-category
        :category="category"
        :products="products"
        :mode="mode"
        :sort="sort"
        :grid-size="gridSize"
        :grid-size-tablet="gridSizeTablet"
      />
    </template>
    <template v-else>
      <vf-l-t-store-category
        :grid-size="gridSize"
        :grid-size-tablet="gridSizeTablet"
      />
    </template>
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { BaseModule } from "vuefront/lib/utils/module.js";
export default {
  mixins: [BaseModule],
  props: ["id", "keyword", "url"],
  asyncData(ctx) {
    return {
      loaded: !document,
    };
  },
  data() {
    const page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    const size = this.$route.query.size ? Number(this.$route.query.size) : 15;
    const sort = this.$route.query.sort ? this.$route.query.sort : "id";
    const order = this.$route.query.order ? this.$route.query.order : "ASC";
    return {
      loaded: !document,
      size,
      sort: `${sort}|${order}`,
      page,
    };
  },
  head() {
    if (!this.category.meta) {
      return {};
    }
    return {
      title: this.category.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.meta.description,
        },
        {
          name: "keywords",
          content: this.category.meta.keyword,
        },
      ],
    };
  },
  breadcrumbs() {
    const category = this.$store.getters["store/category/get"];
    if (!category) {
      return [];
    }
    return [
      {
        title: category.meta.title,
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      category: "store/category/get",
      mode: "store/category/mode",
      products: "store/product/list",
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
    },
    gridSizeTablet() {
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
        return 1;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        return 2;
      } else {
        return 3;
      }
    },
  },
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    },
    $route: {
      deep: true,
      handler(value) {
        this.loaded = false;
      },
    },
  },
  watchQuery: true,
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  methods: {
    async handleLoadData(ctx) {
      try {
        const { id } = this.$vuefront.params;
        const sortData = this.sort.split("|");

        await this.$store.dispatch("apollo/query", {
          query: this.$options.query,
          variables: {
            page: this.page,
            size: this.size,
            categoryId: id,
            sort: sortData[0],
            order: sortData[1],
          },
        });
        const { productsList, category } = this.$store.getters["apollo/get"];
        this.$store.commit("store/product/setEntities", productsList);
        this.$store.commit("store/category/setCategory", category);
        this.loaded = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<graphql>
  query($page: Int, $size: Int, $sort: String, $order: String, $categoryId: String) {
      productsList(page: $page, size: $size, sort: $sort, order: $order, category_id: $categoryId) {
          content {
              id
              name
              shortDescription
              price
              special
              image
              imageLazy
              rating
              url(url: "/store/product/_id")
              keyword
              extra {
                name
                value
              }
              manufacturer {
                id
                name
                image
                imageLazy
                url(url: "/store/manufacturer/_id")
              }
          }
          size
          number
          totalPages
          totalElements
      }
      category(id: $categoryId) {
          id
          name
          description
          image
          imageLazy
          meta {
            title
            description
            keyword
          }
          categories {
              id
              name
              image
              imageLazy
              keyword
              url(url: "/store/category/_id")
          }
      }
  }
</graphql>
