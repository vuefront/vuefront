<template>
  <div class="vf-m-compare-actions">
    <vf-a-button
      class="vf-m-compare-actions__add-to-cart"
      @click="handleAddToCart"
    >
      <vf-a-icon :icon="mdiCartOutline" />
    </vf-a-button>
    <vf-a-button
      class="vf-m-compare-actions__remove"
      color="danger"
      @click="handleRemove"
    >
      <vf-a-icon :icon="mdiDeleteOutline" />
    </vf-a-button>
  </div>
</template>
<script>
import { mdiCartOutline, mdiDeleteOutline } from "@mdi/js";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      mdiCartOutline,
      mdiDeleteOutline,
    };
  },
  methods: {
    handleRemove() {
      this.$store.dispatch("store/compare/remove", {
        id: this.product.id,
      });
    },
    handleAddToCart(compareProduct) {
      this.$store.dispatch("store/cart/add", {
        product: this.product,
        quantity: 1,
        options: [],
      });
    },
  },
};
</script>
