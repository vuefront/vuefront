<template>
  <vf-t-common-layout>
    <vf-t-account-account />
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
const { onLoad } = useBreadcrumbs();
const router = useRouter();
const route = useRoute();
const i18n = useI18n();
const store = useStore();

if (!store.getters["common/customer/auth"]) {
  router.push("/account/login");
}

onLoad([
  {
    title: i18n.t("pages.account.account.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
