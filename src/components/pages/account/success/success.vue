<template>
  <vf-t-common-layout>
    <vf-t-account-success />
  </vf-t-common-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.success.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
  fetch(ctx) {
    if (!ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account/login");
    }
  },
  head() {
    return {
      title: this.$t("pages.account.success.textTitle"),
    };
  },
};
</script>
