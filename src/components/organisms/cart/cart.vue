<template>
  <div class="vf-o-cart">
    <span class="vf-o-cart__trigger" @click="show = true">
      <vf-a-icon :icon="mdiCartOutline" :size="18" />
    </span>
    <vf-o-sidebar :open="show" @close="show = false" right>
      <template #top>
        <vf-a-heading level="1" class="font-normal"
          >Shopping cart</vf-a-heading
        ></template
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
import { ref, computed } from "vue";
import { useStore } from "vuex";
const show = ref(false);
const store = useStore();
const cart = computed(() => store.getters["store/cart/get"]);
</script>
