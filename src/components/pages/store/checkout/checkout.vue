<template>
  <div class="checkout-page"></div>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useBreadcrumbs from "../../../../utils/breadcrumbs";

const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
const route = useRoute();
onLoad([
  {
    title: i18n.t("pages.store.checkout.breadcrumbTitle"),
    to: route.path,
  },
]);
</script>
