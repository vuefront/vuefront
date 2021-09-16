<template>
  <div class="vf-p-common-home"></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useMeta } from "vue-meta";
import useQuery from "../../../../utils/query";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
const { onLoad } = useBreadcrumbs();
const store = useStore();
const { meta } = useMeta({});
const error = computed(() => store.getters["vuefront/error"]);
const { query } = useQuery();
const handleLoadData = async () => {
  await store.dispatch("apollo/query", {
    query,
  });
  if (!error.value) {
    const { home } = store.getters["apollo/get"];

    meta.title = home.meta.title;
    meta.description = home.meta.description;
    meta.keyword = home.meta.keyword;
    onLoad([]);
  }
};
await handleLoadData();
</script>
<graphql>
{
  home {
    meta {
      title
      description
      keyword
    }
  }
}
</graphql>
