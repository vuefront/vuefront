<template>
  <section class="vf-o-cart-products">
    <vf-m-table :fields="fields" :items="cart.products" class="table-cards">
      <template #product="data">
        <vf-m-product-thumb-inline
          :product="data.item.product"
          :option="data.item.option"
        />
      </template>
      <template #price="data">{{ data.item.product.price }}</template>
      <template #quantity="data">
        <vf-o-cart-quantity :cart-product="data.item" />
      </template>
      <template #action="data">
        <vf-o-cart-actions :cart-product="data.item" />
      </template>
    </vf-m-table>
  </section>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
defineProps({
  cart: {
    type: Object,
    default() {
      return null;
    },
  },
});
const i18n = useI18n();
const fields = [
  {
    key: "product",
    label: i18n.t("elements.store.cart.productColumn"),
    sortable: false,
  },
  {
    key: "price",
    label: i18n.t("elements.store.cart.priceColumn"),
    sortable: false,
  },
  {
    key: "quantity",
    label: i18n.t("elements.store.cart.quantityColumn"),
    sortable: false,
  },
  {
    key: "total",
    label: i18n.t("elements.store.cart.totalColumn"),
    sortable: false,
  },
  {
    key: "action",
    label: i18n.t("elements.store.cart.actionColumn"),
    sortable: false,
  },
];
</script>
