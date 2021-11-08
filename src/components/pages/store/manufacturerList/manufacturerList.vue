<template>
  <vf-t-store-manufacturer-list :manufacturers="manufacturers" />
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useQuery from "../../../../utils/query";

const store = useStore();
const route = useRoute();
const loaded = ref(!document);
const i18n = useI18n();
const { query } = useQuery();
const { onLoad } = useBreadcrumbs();

useMeta({
  title: i18n.t("pages.store.manufacturerList.title"),
});

const manufacturers = computed(() => store.getters["store/manufacturer/list"]);
const handleLoadData = async () => {
  await store.dispatch("apollo/query", {
    query,
  });
  const { manufacturerList } = store.getters["apollo/get"];

  store.commit("store/manufacturer/setEntities", manufacturerList);
  loaded.value = true;
  onLoad([
    {
      title: i18n.t("pages.store.manufacturerList.title"),
      to: route.path,
    },
  ]);
};

await handleLoadData();
</script>
<graphql>
{
  manufacturerList(page: 1, size: -1, sort: "name", order: "desc"){
    content {
      id
      name
      url(url: "/store/manufacturer/_id")
    }
  }
}
</graphql>
