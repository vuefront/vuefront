<template>
  <vf-t-account-address-edit
    :address="address"
    :countries="countries"
    :zones="zones"
  />
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useStore } from "vuex";
import useQuery from "../../../../utils/query";
import { useRoute } from "vue-router";
import { computed } from "vue";

const i18n = useI18n();
const { onLoad } = useBreadcrumbs();
const store = useStore();
const { query } = useQuery();
const route = useRoute();

const address = computed(() => store.getters["common/address/get"]);
const countries = computed(() => store.getters["common/country/list"]);
const zones = computed(() => store.getters["common/zone/list"]);
const handleLoadData = async () => {
  await store.dispatch("apollo/query", {
    query,
    variables: { id: route.params.id },
  });
  const { accountAddress, countriesList } = store.getters["apollo/get"];
  store.commit("common/address/setAddress", accountAddress);
  store.commit("common/country/setEntities", countriesList);

  await store.dispatch("common/zone/list", {
    page: 1,
    size: -1,
    country_id: accountAddress.countryId,
  });
};

onLoad([
  {
    title: i18n.t("pages.account.addressEdit.breadcrumbTitle"),
    to: route.path,
  },
]);

await handleLoadData();
</script>
<graphql>
  query($id: String){
    accountAddress(id: $id) {
    id
    firstName
    lastName
    city
    company
    zipcode
    countryId
    zoneId
    address1
    address2
    }
    countriesList(page: 1, size: -1) {
      content {
      id
      name
      }
    }
  }
</graphql>
