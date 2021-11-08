<template>
  <vf-t-store-compare :compare="compare" />
</template>
<script lang="ts" setup>
import { mapGetters, useStore } from "vuex";
import useQuery from "../../../../utils/query";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useRoute } from "vue-router";
const { query } = useQuery();
const store = useStore();
const i18n = useI18n();
const { onLoad } = useBreadcrumbs();
useMeta({
  title: i18n.t("pages.store.compare.metaTitle"),
});
const route = useRoute();
onLoad([
  {
    title: i18n.t("pages.store.compare.breadcrumbTitle"),
    to: route.path,
  },
]);
const compare = computed(() => store.getters["store/compare/get"]);
const loadData = async () => {
  await store.dispatch("apollo/query", {
    query,
  });

  if (!store.getters["vuefront/error"]) {
    store.commit(
      "store/compare/setCompare",
      store.getters["apollo/get"].compare
    );
  }
};
await loadData();
</script>
<graphql>
{
  compare {
    id
    name
    shortDescription
    model
    price
    special
    stock
    image
    imageLazy
  }
}
</graphql>
