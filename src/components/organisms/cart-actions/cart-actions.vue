<template>
  <div class="shopping-cart__action cursor-pointer ma-1" @click="handleRemove">
    <vf-a-icon :icon="mdiClose" />
  </div>
</template>
<script>
import { mdiClose } from "@mdi/js";
export default {
  props: ["cartProduct"],
  data() {
    return {
      mdiClose,
    };
  },
  methods: {
    handleRemove() {
      this.$store.dispatch("store/cart/remove", {
        key: this.cartProduct.key,
      });
    },
  },
};
</script>
