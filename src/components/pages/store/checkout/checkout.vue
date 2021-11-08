<template>
  <div class="checkout-page"></div>
</template>
<script lang="ts" setup>
import useBreadcrumbs from "../../../../utils/breadcrumbs";

const { onLoad } = useBreadcrumbs();

onLoad([
  {
    title: this.$t("pages.store.checkout.breadcrumbTitle"),
    to: this.$route.path,
  },
]);
</script>
