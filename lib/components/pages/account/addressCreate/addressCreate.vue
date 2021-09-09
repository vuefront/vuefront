<template>
  <vf-t-common-layout>
    <vf-t-account-address-create :countries="countries" :zones="zones" />
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import useBreadcrumbs from "../../../../utils/breadcrumbs";

const store = useStore();
const i18n = useI18n();
const { onLoad } = useBreadcrumbs();

await store.dispatch("common/country/list", {
  page: 1,
  size: -1,
});

const countries = computed(() => store.getters["common/country/list"]);

const zones = computed(() => store.getters["common/zone/list"]);

onLoad([
  {
    title: this.$t("pages.account.addressCreate.breadcrumbTitle"),
    to: this.$route.path,
  },
]);
</script>
