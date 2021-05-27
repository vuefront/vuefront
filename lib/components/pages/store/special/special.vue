<template>
  <vf-t-common-layout class="store-special-page">
    <template v-if="loaded">
      <vf-t-store-special
        :products="products"
        :grid-size="gridSize"
        :mode="mode"
        :sort="sort"
      />
    </template>
    <template v-else>
      <vf-l-t-store-special :grid-size="gridSize" />
    </template>
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { BaseModule } from "vuefront/lib/utils/module.js";
export default {
  mixins: [BaseModule],
  asyncData(ctx) {
    return {
      loaded: !process.client,
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
      page,
    };
  },
  head() {
    return {
      title: this.$t("pages.store.special.metaTitle"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("pages.store.special.metaTitle"),
        },
      ],
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.special.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      mode: "store/category/mode",
      products: "store/product/list",
    }),
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
  },
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    },
  },
  watchQuery: true,
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  methods: {
    async handleLoadData(ctx) {
      const sortData = this.sort.split("|");
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
        variables: {
          page: this.page,
          size: this.size,
          sort: sortData[0],
          order: sortData[1],
        },
      });
      const { productsList } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setEntities", productsList);

      this.loaded = true;
    },
  },
};
</script>
<graphql>
query($page: Int, $size: Int, $sort: String, $order: String) {
  productsList(
    page: $page
    size: $size
    sort: $sort
    order: $order
    special: true
  ) {
    content {
      id
      name
      shortDescription
      price
      special
      image
      imageLazy
      rating
      keyword
      url(url: "/store/product/_id")
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
}
</graphql>
