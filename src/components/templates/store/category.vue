<template>
  <section class="store-category-section">
    <vf-category :category="category" class="mb-5" />
    <vf-o-product-sort
      v-if="products.content.length > 0"
      :sorts="sortOptions"
      :sizes="sizeOptions"
      :size="products.size"
      :sort="sort"
      :mode="mode"
      @changeSize="handleChangeSize"
      @changeSort="handleChangeSort"
      @changeMode="handleChangeMode"
    />
    <vf-o-product-grid
      v-if="products.content.length > 0"
      :products="products.content"
      :list="isList"
      :grid-size="grid"
      class="mb-4"
      @click:cart="handleClickCart"
      @click:wishlist="handleClickWishlist"
      @click:compare="handleClickCompare"
    />
    <vf-empty
      v-if="products.content.length === 0"
      class="text-sm-center"
    >{{$t('templates.store.category.emptyText')}}</vf-empty>
    <vf-pagination
      :page="products.number"
      :totalPages="products.totalPages"
      @input="handleChangePage"
    />
  </section>
</template>
<script>
export default {
  props: ["category", "products", "mode", "sort", "gridSize"],
  data() {
    return {
      sizeOptions: [
        {
          text: this.$t("templates.store.category.15Text"),
          value: 15
        },
        {
          text: this.$t("templates.store.category.25Text"),
          value: 25
        },
        {
          text: this.$t("templates.store.category.50Text"),
          value: 50
        },
        {
          text: this.$t("templates.store.category.75Text"),
          value: 75
        },
        {
          text: this.$t("templates.store.category.100Text"),
          value: 100
        }
      ],
      sortOptions: [
        {
          text: this.$t("templates.store.category.defaultSortText"),
          value: "id|ASC"
        },
        {
          text: this.$t("templates.store.category.nameAscSortText"),
          value: "name|ASC"
        },
        {
          text: this.$t("templates.store.category.nameDescSortText"),
          value: "name|DESC"
        },
        {
          text: this.$t("templates.store.category.priceAscSortText"),
          value: "price|ASC"
        },
        {
          text: this.$t("templates.store.category.priceDescSortText"),
          value: "price|DESC"
        },
        {
          text: this.$t("templates.store.category.ratingAscSortText"),
          value: "rating|ASC"
        },
        {
          text: this.$t("templates.store.category.ratingDescSortText"),
          value: "rating|DESC"
        },
        {
          text: this.$t("templates.store.category.modelAscSortText"),
          value: "model|ASC"
        },
        {
          text: this.$t("templates.store.category.modelDescSortText"),
          value: "model|DESC"
        }
      ]
    };
  },
  computed: {
    isList() {
      return this.mode === "list";
    },
    grid() {
      return this.gridSize;
    }
  },
  methods: {
    async handleChangePage(page) {
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: "/store/category/" + id,
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: "/store/category/" + id,
        query: {
          size: this.products.size.toString(),
          sort: sorts[0],
          order: sorts[1]
        }
      });
    },

    handleChangeMode(mode) {
      this.$store.commit("store/category/setMode", mode);
    },

    handleChangeSize(size) {
      const sorts = this.sort.split("|");

      let { id } = this.$vuefront.params;

      this.$router.push({
        path: "/store/category/" + id,
        query: { size: size.toString(), sort: sorts[0], order: sorts[1] }
      });
    },
    handleClickCart(product) {
      this.$store.dispatch("store/cart/add", {
        product,
        redirect: true
      });
    },
    handleClickWishlist(product) {
      this.$store.dispatch("store/wishlist/add", {
        product
      });
    },
    handleClickCompare(product) {
      this.$store.dispatch("store/compare/add", {
        product
      });
    }
  }
};
</script>
