<template>
  <div class="vf-o-cart">
    <span class="vf-o-cart__trigger" @click="show = true">
      <vf-a-icon :icon="mdiCartOutline" :size="18" />
    </span>
    <vf-o-sidebar
      class="vf-o-cart__sidebar"
      :open="show"
      @close="show = false"
      right
    >
      <template #top> Shopping cart </template>
      <vf-o-cart-products :cart="cart" />
      <template #bottom>
        <vf-m-cart-footer :cart="cart" />
      </template>
    </vf-o-sidebar>
  </div>
</template>
<script lang="ts" setup>
import { mdiCartOutline } from "@mdi/js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const show = ref(false);
const store = useStore();
const cart = computed(() => store.getters["store/cart/get"]);
</script>
