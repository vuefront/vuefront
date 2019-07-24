<template>
  <section class="shopping-cart">
    <div class="shopping-cart__products">
      <vf-m-table :fields="fields" :items="cart.products" class="table-cards">
        <template #product="data">
          <vf-m-product-thumb-inline :product="data.item.product" :option="data.item.option" />
        </template>
        <template #price="data">{{data.item.product.price}}</template>
        <template #quantity="data">
          <vf-o-cart-quantity :cart-product="data.item" />
        </template>
        <template #action="data">
          <vf-o-cart-actions :cartProduct="data.item" />
        </template>
      </vf-m-table>
      <vf-o-cart-footer :cart="cart" />
    </div>
  </section>
</template>
<script>
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
  }
};
</script>