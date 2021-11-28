<template>
  <vf-o-cart :cart="cart" />
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
defineProps({
  cart: {
    type: Object,
    default: () => null,
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
