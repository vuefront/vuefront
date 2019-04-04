<template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <v-data-table :headers="headers" :items="cart.products" class="elevation-1" hide-actions>
        <template v-slot:items="props">
          <td class="py-3">
            <v-layout align-center justify-start row fill-height>
              <v-flex>
                <v-img
                  :src="props.item.product.image"
                  :lazy-src="props.item.product.imageLazy"
                  height="46px"
                  contain
                >
                  <template v-slot:placeholder>
                    <v-layout fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-flex>
              <v-flex>
                <div>{{ props.item.product.name }}</div>
              </v-flex>
            </v-layout>
          </td>
          <td>{{ props.item.product.price }}</td>
          <td>
            <v-text-field
              :value="props.item.quantity"
              style="width: 80px;"
              solo
              hide-details
              @change="handleChangeQuantity($event, props.item)"
            />
          </td>
          <td>{{ props.item.total }}</td>
          <td>
            <v-btn flat icon class="ma-1" @click="handleRemove(props.item)">
              <v-icon>clear</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </div>
  </section>
</template>
<script>
export default {
  name: "vfStoreCartDefault",
  props: ["cart"],
  data() {
    return {
      headers: [
        {
          text: "Product",
          align: "left",
          sortable: false
        },
        {
          text: "Price",
          align: "left",
          sortable: false
        },
        { text: "Quantity", sortable: false },
        { text: "Total", sortable: false },
        { text: "", sortable: false }
      ]
    };
  },
  methods: {
    handleChangeQuantity(e, cartProduct) {
      this.$store.dispatch("store/cart/update", {
        key: cartProduct.key,
        quantity: Number(e)
      });
    },

    handleRemove(cartProduct) {
      this.$store.dispatch("store/cart/remove", {
        key: cartProduct.key
      });
    }
  }
};
</script>
