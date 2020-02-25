<template>
  <div class="vf-o-category-products">
    <vf-o-product-sort
      v-if="products.content.length > 0"
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
    <vf-m-empty v-if="products.content.length === 0">{{$t('templates.store.category.emptyText')}}</vf-m-empty>
    <vf-a-pagination
      :page="products.number"
      :totalPages="products.totalPages"
      @input="handleChangePage"
    />
  </div>
</template>
<script>
export default {
  props: ["products", "mode", "sort", "gridSize"],
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
        path: this.$route.path,
        query: { page }
      });
    },
    handleChangeSort(sort) {
      const sorts = sort.split("|");

      this.$router.push({
        path: this.$route.path,
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

      this.$router.push({
        path: this.$route.path,
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
