<template>
  <section class="search-page">
    <vf-t-common-search />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.$t("pages.common.search.metaTitle")
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.common.search.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
  }
};
</script>