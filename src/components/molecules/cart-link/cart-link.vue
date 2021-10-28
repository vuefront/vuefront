<template>
  <vf-a-link class="vf-m-cart-link" to="/store/cart">
    <vf-a-icon :icon="mdiCartOutline" :size="18" />
  </vf-a-link>
</template>
<script lang="ts" setup>
import { mdiCartOutline } from "@mdi/js";
</script>
