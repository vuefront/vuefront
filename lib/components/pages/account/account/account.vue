<template>
  <vf-l-layout>
    <vf-t-account-account />
  </vf-l-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.account.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
  fetch(ctx) {
    if (!ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account/login");
    }
  },
};
</script>