<template>
  <vf-t-common-search />
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useMeta } from "vue-meta";

const store = useStore();
const i18n = useI18n();
const route = useRoute();
const { onLoad } = useBreadcrumbs();
useMeta({ title: i18n.t("pages.common.search.metaTitle") });
onLoad([
  {
    title: i18n.t("pages.common.search.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
