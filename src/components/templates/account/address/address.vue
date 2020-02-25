<template>
  <section class="vf-t-account-address">
    <vf-m-table :fields="fields" :items="items" class="table-address">
      <template #address="{item}">
        <address>
          <strong>{{item.firstName}} {{item.lastName}}</strong>
          <br />
          {{item.address1}}
          <br />
          {{item.city}} {{item.zipcode}}
          <br />
          {{item.zone.name}}
          <br />
          {{item.country.name}}
        </address>
      </template>
      <template #action="{item}">
        <vf-o-address-actions :address="item" />
      </template>
    </vf-m-table>
    <div class="text-right">
      <vf-a-button
        color="primary"
        to="/account/address/create"
      >{{$t('elements.common.account.address.newAddressButton')}}</vf-a-button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      fields: [
        {
          key: "address",
          class: "account-address__description",
          label: this.$t("elements.common.account.address.addressColumn"),
          sortable: false
        },
        {
          key: "action",
          class: "account-address__action text-right",
          label: this.$t("elements.common.account.address.actionColumn"),
          sortable: false
        }
      ]
    };
  }
};
</script>
