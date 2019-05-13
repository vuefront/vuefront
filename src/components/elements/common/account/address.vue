<template>
  <section class="account-address">
    <b-table :fields="fields" :items="items" class="table-address">
      <template slot="address" slot-scope="{item}">
        {{item.firstName}} {{item.lastName}}
        <br>
        {{item.address1}}
        <br>
        {{item.city}} {{item.zipcode}}
      </template>
      <template slot="action" slot-scope="{item}">
        <div class="account-address__action ma-1">
          <b-link :to="`/account/address/${item.id}`">
            <vf-icon icon="pencil-alt" @click="handleEdit(item)"/>
          </b-link>

          <vf-icon icon="times" @click="handleRemove(item)"/>
        </div>
      </template>
    </b-table>
  </section>
</template>
<script>
import { BTable, BLink } from "bootstrap-vue/es/components";
import "vuefront/scss/elements/common/account/address.scss";
export default {
  components: { BTable, BLink },
  props: ["items"],
  data() {
    return {
      fields: [
        {
          key: "address",
          label: this.$t("elements.store.cart.productColumn"),
          sortable: false
        },
        {
          key: "action",
          label: this.$t("elements.store.cart.actionColumn"),
          sortable: false
        }
      ]
    };
  },
  methods: {
    handleRemove(item) {
      console.log(item);
    },
    handleEdit(item) {
      console.log(item);
    }
  }
};
</script>
