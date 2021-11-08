<template>
  <vf-t-common-page :page="page" />
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import useQuery from "../../../../utils/query";
import { computed, inject } from "vue";
import { useMeta } from "vue-meta";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useRoute } from "vue-router";

const { onLoad } = useBreadcrumbs();
const store = useStore();
const { query } = useQuery();
const { meta } = useMeta({});
const route = useRoute();
const vuefront$ = inject<any>("$vuefront");
const page = computed(() => store.getters["common/page/get"]);

const handleLoadData = async () => {
  const { id } = vuefront$.params;

  await store.dispatch("apollo/query", {
    query,
    variables: { id },
  });
  const { page } = store.getters["apollo/get"];
  await store.commit("common/page/setPage", page);

  meta.title = page.meta.title;
  meta.description = page.meta.description;
  meta.keywords = page.meta.keyword;
  onLoad([
    {
      title: page.meta.title,
      to: route.path,
    },
  ]);
};

await handleLoadData();
</script>
<graphql>
query($id: String) {
  page(id: $id) {
    id
    title
    description
    sort_order
    meta {
      title
      description
      keyword
    }
    keyword
  }
}
</graphql>
