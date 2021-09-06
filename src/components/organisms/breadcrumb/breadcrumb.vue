<template>
  <vf-m-container
    :class="{ 'mb-3': breadcrumbs.length > 0 }"
    class="vf-o-breadcrumb"
  >
    <vf-m-breadcrumb v-if="loaded && breadcrumbs.length > 0">
      <vf-m-breadcrumb-item>{{
        $t("elements.common.home.titleText")
      }}</vf-m-breadcrumb-item>
      <vf-m-breadcrumb-item
        v-for="(value, key) in breadcrumbs"
        :key="`breadcrumb-${key}`"
        :to="value.to"
        >{{ value.title }}</vf-m-breadcrumb-item
      >
    </vf-m-breadcrumb>
  </vf-m-container>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const breadcrumbs = computed(() => store.getters["common/breadcrumbs/get"]);
const loaded = computed(() => store.getters["common/breadcrumbs/loaded"]);
</script>
