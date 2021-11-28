<template>
  <div class="vf-o-cart">
    <span class="vf-o-cart__trigger" @click="toggleSidebarCart">
      <vf-a-image :src="CartIcon" :width="25" />
    </span>
    <vf-o-sidebar :open="sidebarCart" @close="toggleSidebarCart" right>
      <template #top>
        <vf-a-heading level="1">Shopping cart</vf-a-heading></template
      >
      <vf-o-cart-products :cart="cart" />
      <template #bottom>
        <vf-m-cart-footer :cart="cart" />
      </template>
    </vf-o-sidebar>
  </div>
</template>
<script lang="ts" setup>
import CartIcon from "../../../../assets/img/cart-icon.svg";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cart = computed(() => store.getters["store/cart/get"]);
const sidebarCart = computed(() => store.getters["vuefront/sidebarCart"]);
const toggleSidebarCart = () => store.commit("vuefront/toggleSidebarCart");
</script>
