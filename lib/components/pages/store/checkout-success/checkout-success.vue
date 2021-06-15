<template>
  <vf-t-common-layout class="vf-p-store-checkout-success">
    <vf-t-store-checkout-success/>
  </vf-t-common-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.checkoutSuccess.breadcrumbCartTitle"),
        to: '/store/cart',
      },
      {
        title: this.$t("pages.store.checkoutSuccess.breadcrumbCheckoutTitle"),
        to: '/store/checkout',
      },
      {
        title: this.$t("pages.store.checkoutSuccess.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>