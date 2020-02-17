<template>
  <section class="checkout-page"></section>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.checkout.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
  }
};
</script>
