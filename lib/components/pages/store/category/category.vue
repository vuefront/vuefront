<template>
  <vf-t-store-category
    :category="category"
    :products="products"
    :mode="mode"
    :sort="sort"
    :grid-size="gridSize"
    :grid-size-tablet="gridSizeTablet"
  />
</template>
<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import useModule from "../../../../utils/module";
import useQuery from "../../../../utils/query";
const { checkModules } = useModule();
const route = useRoute();
const store = useStore();
const { meta } = useMeta({});
const { onLoad } = useBreadcrumbs();

const page = ref(route.query.page ? Number(route.query.page) : 1);
const sort = ref(
  (route.query.sort || "id") + "|" + (route.query.order || "ASC")
);
const size = ref(route.query.size ? Number(route.query.size) : 15);
const category = computed(() => store.getters["store/category/get"]);
const mode = computed(() => store.getters["store/manufacturer/mode"]);
const products = computed(() => store.getters["store/product/list"]);
const vuefront$ = inject<any>("$vuefront");
const { query } = useQuery();

const gridSize = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 2;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 3;
  } else {
    return 4;
  }
});

const gridSizeTablet = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 1;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 2;
  } else {
    return 3;
  }
});

const handleLoadData = async () => {
  try {
    const { id } = vuefront$.params;

    const sortData = sort.value.split("|");

    await store.dispatch("apollo/query", {
      query,
      variables: {
        page: page.value,
        size: size.value,
        categoryId: id,
        sort: sortData[0],
        order: sortData[1],
      },
    });
    const { productsList, category } = store.getters["apollo/get"];
    store.commit("store/product/setEntities", productsList);
    store.commit("store/category/setCategory", category);
    meta.title = category.name;
    meta.description = category.meta.description;
    meta.keywords = category.meta.keyword;
    onLoad([
      {
        title: category.meta.title,
        to: route.path,
      },
    ]);
  } catch (e) {
    console.log(e);
  }
};
await handleLoadData();
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
