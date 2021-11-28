<template>
  <section class="vf-t-account-address">
    <vf-m-table class="table-address">
      <vf-m-thead>
        <vf-m-tr>
          <vf-m-th>{{
            $t("elements.common.account.address.addressColumn")
          }}</vf-m-th>
          <vf-m-th class="text-right">{{
            $t("elements.common.account.address.actionColumn")
          }}</vf-m-th>
        </vf-m-tr>
      </vf-m-thead>
      <vf-m-tbody>
        <vf-m-tr v-for="(value, index) in items" :key="index">
          <vf-m-td>
            <address>
              <strong>{{ value.firstName }} {{ value.lastName }}</strong>
              <br />
              {{ value.address1 }}
              <br />
              {{ value.city }} {{ value.zipcode }}
              <br />
              {{ value.zone.name }}
              <br />
              {{ value.country.name }}
            </address>
          </vf-m-td>
          <vf-m-td class="text-right">
            <vf-o-address-actions :address="value" />
          </vf-m-td>
        </vf-m-tr>
      </vf-m-tbody>
    </vf-m-table>
    <div class="text-right">
      <vf-a-button color="primary" to="/account/address/create">{{
        $t("elements.common.account.address.newAddressButton")
      }}</vf-a-button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { AccountAddress } from "vuefront-api";
defineProps({
  items: {
    type: Array as PropType<AccountAddress[]>,
    default() {
      return [];
    },
  },
});
</script>
