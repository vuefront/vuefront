<template>
  <vf-t-account-edit :account="account" />
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const store = useStore();
const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
const route = useRoute();

const account = computed(() => store.getters["common/customer/get"]);

onLoad([
  {
    title: i18n.t("pages.account.edit.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
