<template>
  <vf-t-account-register />
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.register.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
  },
  fetch(ctx) {
    if (ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account");
    }
  }
};
</script>