<template>
  <vf-o-layout>
    <vf-t-account-account />
  </vf-o-layout>
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: {
    BLink
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.account.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
  },
  fetch(ctx) {
    if (!ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account/login");
    }
  }
};
</script>
