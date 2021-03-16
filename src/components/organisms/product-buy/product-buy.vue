<template>
  <vf-a-button variant="primary" @click="handleAddToCart">
    <vf-a-icon :icon="mdiCartOutline" />
    {{ $t("elements.store.product.buttonAddToCart") }}
  </vf-a-button>
</template>
<script>
import { mapGetters } from "vuex";
import { mdiCartOutline } from "@mdi/js";
export default {
  props: ["product"],
  data() {
    return {
      mdiCartOutline,
    };
  },
  computed: {
    ...mapGetters({
      options: "store/product/options",
    }),
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        product: this.product,
        quantity: 1,
        options: this.options,
      });
    },
  },
};
</script>
