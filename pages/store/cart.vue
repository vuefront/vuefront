<template>
  <sf-cart :cart="cart"/>
</template>
<script lang="ts">
import {Vue, Component, Getter} from 'nuxt-property-decorator'
import cartGetGql from '~/types/graphql/store/cart/get.graphql'
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

  async fetch({store}) {
    await store.dispatch('apollo/query', {
      query: cartGetGql
    })
    const {cart} = store.getters['apollo/get']
    store.commit('store/cart/setCart', cart)
  }
}
</script>