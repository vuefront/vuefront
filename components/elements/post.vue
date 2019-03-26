<template>
  <div>123123</div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "~/types";

@Component
export default class extends Vue {
  @Prop()
  product!: Post;

  async handleAddToCart() {
    this.$store.commit('notification/add', `${this.product.name} product successfully added to cart`)

    await this.$store.dispatch('store/cart/addToCart', {id: Number(this.product.id), quantity: 1})
  }
}
</script>
