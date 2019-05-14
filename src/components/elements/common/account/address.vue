<template>
  <section class="account-address">
    <b-table :fields="fields" :items="items" class="table-address">
      <template #address="{item}">
        {{item.firstName}} {{item.lastName}}
        <br>
        {{item.address1}}
        <br>
        {{item.city}} {{item.zipcode}}
        <br>
        {{item.zone.name}}
        <br>
        {{item.country.name}}
      </template>
      <template #action="{item}">
        <div class="account-address__action ma-1">
          <span @click="handleEdit(item)">
            <vf-icon icon="pencil-alt"/>
          </span>
          <span @click="handleRemove(item)">
            <vf-icon icon="times"/>
          </span>
        </div>
      </template>
    </b-table>
    <div class="text-right">
      <b-button
        pill
        variant="primary"
        to="/account/address/create"
      >{{$t('elements.common.account.address.newAddressButton')}}</b-button>
    </div>
  </section>
</template>
<script>
import { BTable, BLink, BButton } from "bootstrap-vue/es/components";
import "vuefront/scss/elements/common/account/address.scss";
export default {
  components: { BTable, BLink, BButton },
  props: ["items"],
  data() {
    return {
      fields: [
        {
          key: "address",
          label: this.$t("elements.common.account.address.addressColumn"),
          sortable: false
        },
        {
          key: "action",
          class: "account-address__action_column",
          label: this.$t("elements.common.account.address.actionColumn"),
          sortable: false
        }
      ]
    };
  },
  methods: {
    async handleRemove({ id }) {
      await this.$store.dispatch("common/address/remove", { id });
    },
    handleEdit({ id }) {
      this.$router.push(`/account/address/${id}/edit`);
    }
  }
};
</script>
