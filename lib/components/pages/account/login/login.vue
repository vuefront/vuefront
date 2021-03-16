<template>
  <vf-o-layout>
    <vf-t-account-login />
  </vf-o-layout>
</template>
<script>
export default {
  fetch(ctx) {
    if (ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account");
    }
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.login.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>
