<template>
  <vf-t-common-layout>
    <vf-t-account-success />
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useMeta } from "vue-meta";

const store = useStore();
const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
const route = useRoute();
const router = useRouter();

if (!store.getters["common/customer/auth"]) {
  router.push("/account/login");
}

onLoad([
  {
    title: i18n.t("pages.account.success.breadcrumbTitle"),
    to: route.path,
  },
]);
useMeta({ title: i18n.t("pages.account.success.textTitle") });
</script>
