<template>
  <div class="vf-m-cart-product">
    <vf-m-product-thumb-inline
      :product="cartProduct.product"
      :option="cartProduct.option"
      @change-quantity="handleChangeQuantity"
      class="vf-m-cart-product__product"
    >
      <div class="vf-m-cart-product__price">
        {{ cartProduct.total }}
      </div>
      <div class="vf-m-cart-product__remove" @click="handleRemove">
        <vf-a-icon :icon="mdiTrashCanOutline" :size="16" />
      </div>
    </vf-m-product-thumb-inline>
  </div>
</template>
<script lang="ts" setup>
import { mdiTrashCanOutline } from "@mdi/js";
const props = defineProps({
  cartProduct: {
    type: Object,
    default() {
      return null;
    },
  },
});
const emits = defineEmits(["remove", "change-quantity"]);
const handleRemove = () => {
  emits("remove", props.cartProduct.key);
};
const handleChangeQuantity = (e: number) => {
  emits("change-quantity", e);
};
</script>
