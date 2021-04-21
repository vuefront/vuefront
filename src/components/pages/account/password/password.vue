<template>
  <vf-t-common-layout>
    <vf-t-account-password />
  </vf-t-common-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.password.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>
