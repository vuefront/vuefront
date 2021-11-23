<template>
  <div class="vf-o-cart">
    <span class="vf-o-cart__trigger" @click="show = true">
      <vf-a-image :src="CartIcon" :width="25" />
    </span>
    <vf-o-sidebar :open="show" @close="show = false" right>
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
import { mdiCartOutline } from "@mdi/js";
import CartIcon from "../../../../assets/img/cart-icon.svg";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const show = ref(false);
const store = useStore();
const cart = computed(() => store.getters["store/cart/get"]);
</script>
