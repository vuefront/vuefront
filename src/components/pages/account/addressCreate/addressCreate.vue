<template>
  <section>
    <vf-t-account-address-create :countries="countries" :zones="zones" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      countries: "common/country/list",
      zones: "common/zone/list"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("common/country/list", {
      page: 1,
      size: -1
    });
  }
};
</script>
