<template>
  <vf-t-common-layout>
    <vf-t-common-contact :contact="contact" />
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  async fetch({ store }) {
    await store.dispatch("common/contact/get");
  },
  head() {
    return {
      title: this.$t("pages.common.contact.metaTitle"),
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.common.contact.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      contact: "common/contact/get",
    }),
  },
};
</script>
