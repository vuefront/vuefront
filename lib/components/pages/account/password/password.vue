<template>
  <vf-t-common-layout>
    <vf-t-account-password />
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import useBreadcrumbs from "../../../../utils/breadcrumbs";

const route = useRoute();
const i18n = useI18n();
const { onLoad } = useBreadcrumbs();

onLoad([
  {
    title: i18n.t("pages.account.password.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
