<template>
  <vf-o-layout>
    <vf-t-account-address-edit :address="address" :countries="countries" :zones="zones" />
  </vf-o-layout>
</template>
<script>
import { mapGetters } from "vuex";
import addressGetGql from "./addressEdit.graphql";
export default {
  computed: {
    ...mapGetters({
      address: "common/address/get",
      countries: "common/country/list",
      zones: "common/zone/list"
    })
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.account.addressEdit.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
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