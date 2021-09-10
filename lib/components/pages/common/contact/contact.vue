<template>
  <vf-t-common-contact :contact="contact" />
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";

const store = useStore();
const i18n = useI18n();
const route = useRoute();

const { onLoad } = useBreadcrumbs();
await store.dispatch("common/contact/get");
const contact = computed(() => store.getters["common/contact/get"]);
onLoad([
  {
    title: i18n.t("pages.common.contact.breadcrumbTitle"),
    to: route.path,
  },
]);
useMeta({ title: i18n.t("pages.common.contact.metaTitle") });
</script>
