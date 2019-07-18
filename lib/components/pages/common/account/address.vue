<template>
  <section>
    <vf-account-address :items="items"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      items: "common/address/list"
    })
  },
  async fetch({ store }) {
    await store.dispatch("common/address/list");
  }
};
</script>