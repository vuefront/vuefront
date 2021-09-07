<template>
  <vf-t-common-layout>
    <template v-if="loaded">
      <vf-t-store-manufacturer
        :manufacturer="manufacturer"
        :products="products"
        :mode="mode"
        :sort="sort"
        :grid-size="gridSize"
      />
    </template>
    <template v-else>
      <vf-l-t-store-manufacturer :grid-size="gridSize" />
    </template>
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import useModule from "../../../../utils/module";
export default {
  setup() {
    const { checkModules } = useModule();

    return { checkModules };
  },
  props: ["id", "keyword", "url"],
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
    if (!this.manufacturer.name) {
      return {};
    }
    return {
      title: this.manufacturer.name,
    };
  },
  breadcrumbs() {
    const manufacturer = this.$store.getters["store/manufacturer/get"];

    return [
      {
        title: this.$t("pages.store.manufacturerList.title"),
        to: "/store/manufacturer",
      },
      {
        title: manufacturer.name,
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      manufacturer: "store/manufacturer/get",
      mode: "store/manufacturer/mode",
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
  methods: {
    async handleLoadData(ctx) {
      const { id } = this.$vuefront.params;
      const sortData = this.sort.split("|");

      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
        variables: {
          page: this.page,
          size: this.size,
          manufacturerId: id,
          sort: sortData[0],
          order: sortData[1],
        },
      });
      const { productsList, manufacturer } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setEntities", productsList);
      this.$store.commit("store/manufacturer/setManufacturer", manufacturer);
      this.loaded = true;
    },
  },
};
</script>
<graphql>
  query($page: Int, $size: Int, $sort: String, $order: String, $manufacturerId: String) {
      productsList(page: $page, size: $size, sort: $sort, order: $order, manufacturer_id: $manufacturerId) {
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
      manufacturer(id: $manufacturerId) {
        id
        name
        image
        imageLazy
        url(url: "/store/manufacturer/_id")
      }
  }
</graphql>
