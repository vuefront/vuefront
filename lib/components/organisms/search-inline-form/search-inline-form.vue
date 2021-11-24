<template>
  <span class="vf-o-search-inline-form">
    <vf-a-input
      class="vf-o-search-inline-form__input"
      v-model="keyword"
      :placeholder="$t('elements.common.header.navSearch.placeholderText')"
      size="sm"
      :hide-details="!$vuefront.isAMP"
      trim
      @keypress.stop="handleKeyPress"
    />
    <span class="vf-o-search-inline-form__icon cursor-text">
      <vf-a-image :src="SearchIcon" width="20"></vf-a-image>
    </span>
  </span>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mdiMagnify } from "@mdi/js";
import SearchIcon from "../../../../assets/img/search-icon.svg";
const keyword = ref("");
const show = ref(false);
const route = useRoute();
const router = useRouter();
watch(
  () => route,
  (to, from) => {
    if (to.matched.length > 0 && to.matched[0].path === "/search/:slug") {
      keyword.value = to.params.slug as string;
    } else {
      keyword.value = "";
    }
  }
);
onBeforeMount(() => {
  if (
    route &&
    route.matched.length > 0 &&
    route.matched[0].path === "/search/:slug"
  ) {
    keyword.value = route.params.slug as string;
  }
});
const handleKeyPress = (e: any) => {
  if (e.key === "Enter") {
    if (keyword.value !== "") {
      router.push(`/search/${keyword.value}`);
    } else {
      router.push("/search");
    }
  }
};
const doSearch = () => {
  router.push(`/search/${keyword.value}`);
};
</script>
