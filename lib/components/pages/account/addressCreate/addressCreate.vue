<template>
  <vf-o-layout>
    <vf-t-account-address-create :countries="countries" :zones="zones" />
  </vf-o-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  async fetch({ store, params }) {
    await store.dispatch("common/country/list", {
      page: 1,
      size: -1,
    });
  },
  computed: {
    ...mapGetters({
      countries: "common/country/list",
      zones: "common/zone/list",
    }),
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.addressCreate.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
};
</script>
