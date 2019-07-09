<template>
  <section class="store-special-page">
    <template v-if="loaded">
      <vf-template-special :products="products" :grid-size="gridSize" :mode="mode" :sort="sort" />
    </template>
    <template v-else>
      <vf-loader-special-page :grid-size="gridSize" />
    </template>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import specialPageGql from "~/graphql/store/category/special.graphql";
import { BaseModule } from "~/utils/module.js";
export default {
  head() {
    return {
      title: this.$t("templates.store.special.textTitle"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("templates.store.special.textTitle")
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
  computed: {
    ...mapGetters({
      mode: "store/category/mode",
      products: "store/product/list"
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
    }
  },
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
  serverPrefetch() {
    return this.handleLoadData(this);
  },
  watchQuery: true,
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    }
  },
  methods: {
    async handleLoadData(ctx) {
      const sortData = this.sort.split("|");
      await this.$store.dispatch("apollo/query", {
        query: specialPageGql,
        variables: {
          page: this.page,
          size: this.size,
          sort: sortData[0],
          order: sortData[1]
        }
      });
      const { productsList } = this.$store.getters["apollo/get"];
      this.$store.commit("store/product/setEntities", productsList);

      this.loaded = true;
    }
  }
};
</script>
