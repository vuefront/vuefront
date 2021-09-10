<template>
  <vf-t-store-checkout-success class="vf-p-store-checkout-success" />
</template>
<script lang="ts" setup>
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const route = useRoute();
const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
onLoad([
  {
    title: i18n.t("pages.store.checkoutSuccess.breadcrumbCartTitle"),
    to: "/store/cart",
  },
  {
    title: i18n.t("pages.store.checkoutSuccess.breadcrumbCheckoutTitle"),
    to: "/store/checkout",
  },
  {
    title: i18n.t("pages.store.checkoutSuccess.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
