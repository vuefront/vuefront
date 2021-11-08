<template>
  <vf-t-account-address :items="items" />
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import useBreadcrumbs from "../../../../utils/breadcrumbs";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import useQuery from "../../../../utils/query";

const store = useStore();
const { onLoad } = useBreadcrumbs();
const i18n = useI18n();
const route = useRoute();
const { query } = useQuery();
const items = computed(() => store.getters["common/address/list"]);

const handleLoadData = async () => {
  await store.dispatch("apollo/query", { query });
  if (!store.getters["vuefront/error"]) {
    store.commit(
      "common/address/setEntities",
      store.getters["apollo/get"].accountAddressList
    );
  }

  onLoad([
    {
      title: i18n.t("pages.account.address.breadcrumbTitle"),
      to: route.path,
    },
  ]);
};

await handleLoadData();
</script>
<graphql>
{
  accountAddressList {
    id
    firstName
    lastName
    address1
    address2
    zoneId
    zone {
      id
      name
    }
    countryId
    country {
      id
      name
    }
    city
    company
    zipcode
    }
}
</graphql>
