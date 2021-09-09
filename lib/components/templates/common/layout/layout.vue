<template>
  <router-view v-slot="{ Component }" :key="route.fullPath">
    <component :is="currentLayout" class="vf-t-common-layout">
      <suspense>
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <component v-if="loader" :is="loader"></component>
          <div v-else>...Loading</div>
        </template>
      </suspense>
    </component>
  </router-view>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useLayout from "../../../../utils/baseLayout";
const { initLayout, layout } = useLayout("");
initLayout();
const route = useRoute();
const loader = computed(() => {
  let result = null;
  if (route.matched.length > 0 && route.meta.loader) {
    result = route.meta.loader;
  }

  return result;
});
const currentLayout = "vf-t-layout-" + layout.value;
</script>
