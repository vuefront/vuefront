<template>
  <section>
    <vf-account-address-edit :address="address"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      address: "common/address/get"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("common/address/get", {id: params.id});
  }
};
</script>