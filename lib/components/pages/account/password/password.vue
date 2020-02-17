<template>
  <vf-t-account-password />
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
