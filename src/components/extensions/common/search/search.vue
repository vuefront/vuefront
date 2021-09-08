<template>
  <div class="vf-e-common-search">
    <vf-m-input-group>
      <vf-a-input
        v-model="keyword"
        :placeholder="$t('elements.common.header.navSearch.placeholderText')"
        size="sm"
        :hide-details="!$vuefront.isAMP"
        @keypress="handleKeyPress"
      />
      <template #append>
        <vf-a-button size="sm" color="primary" @click="handleSearch">
          <vf-a-icon :icon="mdiMagnify" />
        </vf-a-button>
      </template>
    </vf-m-input-group>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import { mdiMagnify } from "@mdi/js";
import { useRoute, useRouter } from "vue-router";
const keyword = ref("");
const route = useRoute();
const router = useRouter();
watch(
  () => route,
  (to, from) => {
    if (to.matched[0].path === "/search/:slug") {
      keyword.value = to.params.slug as string;
    } else {
      keyword.value = "";
    }
  }
);

onBeforeMount(() => {
  if (route.matched.length > 0 && route.matched[0].path === "/search/:slug") {
    keyword.value = route.params.slug as string;
  }
});
const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    if (keyword.value !== "") {
      router.push(`/search/${keyword.value}`);
    } else {
      router.push("/search");
    }
  }
};
const handleSearch = () => {
  if (keyword.value !== "") {
    router.push(`/search/${keyword.value}`);
  } else {
    router.push("/search");
  }
};
</script>
