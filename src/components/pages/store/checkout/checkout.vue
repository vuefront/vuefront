<template>
  <vf-t-common-layout class="checkout-page"></vf-t-common-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.checkout.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>
