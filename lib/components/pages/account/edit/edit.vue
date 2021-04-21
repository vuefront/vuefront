<template>
  <vf-t-common-layout>
    <vf-t-account-edit :account="account" />
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      account: "common/customer/get",
    }),
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.edit.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>
