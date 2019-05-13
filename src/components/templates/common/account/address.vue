<template>
  <section>
    <vf-account-address :items="contact"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      contact: "common/customer/getAddresses"
    })
  },
  async fetch({ store }) {
    await store.dispatch("common/customer/getAddresses");
  }
};
</script>