<template>
  <vf-o-layout class="checkout-page"></vf-o-layout>
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
