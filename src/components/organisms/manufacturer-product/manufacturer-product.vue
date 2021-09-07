<template>
  <div class="vf-o-manufacturer-products">
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
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
      class="mb-4"
      @click:cart="handleClickCart"
      @click:wishlist="handleClickWishlist"
      @click:compare="handleClickCompare"
    />
    <vf-m-empty v-if="products.content.length === 0">{{
      $t("templates.store.manufacturer.emptyText")
    }}</vf-m-empty>
    <vf-a-pagination
      v-if="products.content.length > 0"
      :page="products.number"
      :total-pages="products.totalPages"
      @input="handleChangePage"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  products: {
    type: Object,
    default() {
      return null;
    },
  },
  mode: {
    type: String,
    default() {
      return "grid";
    },
  },
  sort: {
    type: String,
    default() {
      return "id|ASC";
    },
  },
  gridSize: {
    type: Number,
    default() {
      return 4;
    },
  },
  gridSizeTablet: {
    type: Number,
    default() {
      return 2;
    },
  },
});
const route = useRoute();
const router = useRouter();
const store = useStore();

const isList = computed(() => {
  return props.mode === "list";
});
const handleChangePage = (page: number) => {
  router.push({
    path: route.path,
    query: { page },
  });
};

const handleChangeSort = (sort: string) => {
  const sorts = sort.split("|");

  router.push({
    path: route.path,
    query: {
      size: props.products.size.toString(),
      sort: sorts[0],
      order: sorts[1],
    },
  });
};

const handleChangeMode = (mode: string) => {
  store.commit("store/manufacturer/setMode", mode);
};

const handleChangeSize = (size: string) => {
  const sorts = props.sort.split("|");

  router.push({
    path: route.path,
    query: { size: size.toString(), sort: sorts[0], order: sorts[1] },
  });
};
const handleClickCart = (product: object) => {
  store.dispatch("store/cart/add", {
    product,
    redirect: true,
  });
};
const handleClickWishlist = (product: object) => {
  store.dispatch("store/wishlist/add", {
    product,
  });
};
const handleClickCompare = (product: object) => {
  store.dispatch("store/compare/add", {
    product,
  });
};
</script>
