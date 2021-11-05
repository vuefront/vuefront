<template>
  <vf-a-link to="/account/wishlist" class="flex items-center">
    <vf-a-icon :icon="mdiHeartOutline" :size="20"></vf-a-icon>
  </vf-a-link>
</template>
<script setup lang="ts">
import { mdiHeartOutline } from "@mdi/js";
</script>
