<template>
  <section class="vf-o-cart-products">
    <vf-m-table :fields="fields" :items="cart.products" class="table-cards">
      <template #product="data">
        <vf-m-product-thumb-inline
          :product="data.item.product"
          :option="data.item.option"
          @change-quantity="handleChangeQuantity(data.item.key, $event)"
        />
      </template>
      <template #action="data">
        <vf-o-cart-actions :cart-product="data.item" />
      </template>
    </vf-m-table>
  </section>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
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

const store = useStore();

const handleChangeQuantity = (key: string, e: string) => {
  store.dispatch("store/cart/update", {
    key,
    quantity: Number(e),
  });
};
</script>
