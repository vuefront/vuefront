  <template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <vf-m-table :fields="fields" :items="cart.products" class="table-cards">
        <template #product="data">
          <vf-o-cart-product-thumb :product="data.item" />
        </template>
        <template #price="data">{{data.item.product.price}}</template>
        <template #quantity="data">
          <vf-o-cart-quantity :cart-product="data.item" />
        </template>
        <template #action="data">
          <div class="shopping-cart__action ma-1" @click="handleRemove(data.item)">
            <vf-a-icon icon="times" />
          </div>
        </template>
      </vf-m-table>
    </div>
    <vf-o-cart-actions :cart="cart" />
  </section>
</template>
<script>
import { isEmpty } from "lodash";
export default {
  props: ["cart"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t("elements.store.cart.productColumn"),
          sortable: false
        },
        {
          key: "price",
          label: this.$t("elements.store.cart.priceColumn"),
          sortable: false
        },
        {
          key: "quantity",
          label: this.$t("elements.store.cart.quantityColumn"),
          sortable: false
        },
        {
          key: "total",
          label: this.$t("elements.store.cart.totalColumn"),
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
    handleRemove(cartProduct) {
      this.$store.dispatch("store/cart/remove", {
        key: cartProduct.key
      });
    }
  }
};
</script>
<style lang="scss">
.shopping-cart {
  &__action {
    cursor: pointer;
  }
}
</style>
