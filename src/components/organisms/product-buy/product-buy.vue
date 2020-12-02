<template>
  <vf-a-button variant="primary" @click="handleAddToCart">
    <vf-a-icon icon="cart-outline" />
    {{$t('elements.store.product.buttonAddToCart')}}
  </vf-a-button>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapGetters({
      options: "store/product/options"
    })
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        product: this.product,
        quantity: 1,
        options: this.options
      });
    }
  }
};
</script>
