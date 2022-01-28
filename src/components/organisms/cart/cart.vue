<template>
  <section class="vf-o-cart">
    <vf-m-table>
      <vf-m-thead>
        <vf-m-tr>
          <vf-m-th>{{ $t("elements.store.cart.productColumn") }}</vf-m-th>
          <vf-m-th class="text-center">{{
            $t("elements.store.cart.priceColumn")
          }}</vf-m-th>
          <vf-m-th class="text-center">{{
            $t("elements.store.cart.quantityColumn")
          }}</vf-m-th>
          <vf-m-th class="text-center">{{
            $t("elements.store.cart.totalColumn")
          }}</vf-m-th>
          <vf-m-th>{{ $t("elements.store.cart.actionColumn") }}</vf-m-th>
        </vf-m-tr>
      </vf-m-thead>
      <vf-m-tbody>
        <vf-m-cart-product-table-row
          v-for="(value, index) in cart.products"
          :key="index"
          :cart-product="value"
          @change-quantity="handleChangeQuantity(value.key, $event)"
          @remove="handleRemove(value.key)"
        />
      </vf-m-tbody>
      <vf-m-tfoot>
        <vf-m-tr>
          <vf-m-td :colspan="5" class="text-right">
            <vf-m-cart-footer :cart="cart" class="inline-block" />
          </vf-m-td>
        </vf-m-tr>
      </vf-m-tfoot>
    </vf-m-table>
  </section>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
defineProps({
  cart: {
    type: Object,
    default: () => null,
  },
});
const store = useStore();

const handleChangeQuantity = (key: string, e: string) => {
  store.dispatch("store/cart/update", {
    key,
    quantity: Number(e),
  });
};
const handleRemove = (key: string) => {
  store.dispatch("store/cart/remove", {
    key,
  });
};
</script>
