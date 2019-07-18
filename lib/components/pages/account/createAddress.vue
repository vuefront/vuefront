<template>
  <section>
    <vf-account-address-create :countries="countries"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      countries: "common/country/list"
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
