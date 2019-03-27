<template>
  <vf-cart :cart="cart"/>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import {Cart} from "~/types";

@Component({
  head() {
    return {
      title: 'Shopping Cart'
    }
  }
})
export default class extends Vue {
  @Getter('store/cart/get') cart!: Cart
}
</script>