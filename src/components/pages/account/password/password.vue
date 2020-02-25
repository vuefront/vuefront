<template>
  <vf-o-layout>
    <vf-t-account-password />
  </vf-o-layout>
</template>
<script>
export default {
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.password.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
  }
};
</script>
