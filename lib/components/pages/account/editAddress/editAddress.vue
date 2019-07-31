<template>
  <section>
    <vf-t-account-edit-address :address="address" :countries="countries" :zones="zones" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import addressGetGql from "./editAddress.graphql";
export default {
  computed: {
    ...mapGetters({
      address: "common/address/get",
      countries: "common/country/list",
      zones: "common/zone/list"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("apollo/query", {
      query: addressGetGql,
      variables: { id: params.id }
    });
    const { accountAddress, countriesList } = store.getters["apollo/get"];
    store.commit("common/address/setAddress", accountAddress);
    store.commit("common/country/setEntities", countriesList);

    await store.dispatch("common/zone/list", {
      page: 1,
      size: -1,
      country_id: accountAddress.countryId
    });
  }
};
</script>