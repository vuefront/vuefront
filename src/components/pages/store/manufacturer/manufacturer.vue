<template>
  <vf-t-common-layout>
    <metainfo />
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
<script lang="ts" setup>
import { computed, inject, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import useModule from "../../../../utils/module";
import useQuery from "../../../../utils/query";

const { meta } = useMeta({});
const { onLoad } = useBreadcrumbs();
const { query } = useQuery();
const { checkModules } = useModule();
const vuefront$ = inject<any>("$vuefront");
const loaded = ref(!document);
const route = useRoute();
const store = useStore();
const i18n = useI18n();
const page = ref(route.query.page ? Number(route.query.page) : 1);
const sort = ref(
  (route.query.sort || "id") + "|" + (route.query.order || "ASC")
);
const size = ref(route.query.size ? Number(route.query.size) : 15);
const manufacturer = computed(() => store.getters["store/manufacturer/get"]);
const mode = computed(() => store.getters["store/manufacturer/mode"]);
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

watch(
  () => loaded.value,
  (newValue, oldValue) => {
    if (!newValue && oldValue) {
      handleLoadData();
    }
  }
);

onMounted(() => {
  if (!loaded.value) {
    handleLoadData();
  }
});

const handleLoadData = async () => {
  const { id } = vuefront$.params;
  const sortData = sort.value.split("|");

  await store.dispatch("apollo/query", {
    query,
    variables: {
      page: page.value,
      size: size.value,
      manufacturerId: id,
      sort: sortData[0],
      order: sortData[1],
    },
  });
  const { productsList, manufacturer } = store.getters["apollo/get"];
  store.commit("store/product/setEntities", productsList);
  store.commit("store/manufacturer/setManufacturer", manufacturer);
  loaded.value = true;
  meta.title = manufacturer.name;
  onLoad([
    {
      title: i18n.t("pages.store.manufacturerList.title"),
      to: "/store/manufacturer",
    },
    {
      title: manufacturer.name,
      to: route.path,
    },
  ]);
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
