<template>
  <vf-t-store-special
    class="store-special-page"
    :products="products"
    :grid-size="gridSize"
    :mode="mode"
    :sort="sort"
  />
</template>
<script lang="ts" setup>
import { mapGetters, useStore } from "vuex";
import useModule from "../../../../utils/module";
import { computed, inject, ref } from "vue";
import useQuery from "../../../../utils/query";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
const { checkModules } = useModule();
const route = useRoute();
const page = ref(route.query.page ? Number(route.query.page) : 1);
const sort = ref(
  (route.query.sort || "id") + "|" + (route.query.order || "ASC")
);
const size = ref(route.query.size ? Number(route.query.size) : 15);
const vuefront$ = inject<any>("$vuefront");
const { query } = useQuery();
const i18n = useI18n();
useMeta({
  title: i18n.t("pages.store.special.metaTitle"),
  meta: [
    {
      hid: "description",
      name: "description",
      content: i18n.t("pages.store.special.metaTitle"),
    },
  ],
});
const { onLoad } = useBreadcrumbs();
onLoad([
  {
    title: i18n.t("pages.store.special.breadcrumbTitle"),
    to: route.path,
  },
]);
const store = useStore();
const mode = computed(() => store.getters["store/category/mode"]);
const products = computed(() => store.getters["store/product/list"]);
const gridSize = computed(() => {
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    return 2;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    return 3;
  } else {
    return 4;
  }
});
const handleLoadData = async () => {
  const sortData = sort.value.split("|");
  await store.dispatch("apollo/query", {
    query,
    variables: {
      page: page.value,
      size: size.value,
      sort: sortData[0],
      order: sortData[1],
    },
  });
  const { productsList } = store.getters["apollo/get"];
  store.commit("store/product/setEntities", productsList);
};
await handleLoadData();
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
