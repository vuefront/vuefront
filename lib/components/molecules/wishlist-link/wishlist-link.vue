<template>
  <vf-a-link to="/account/wishlist" class="flex items-center">
    <vf-a-image :src="WishlistIcon" :width="20"></vf-a-image>
  </vf-a-link>
</template>
<script setup lang="ts">
import WishlistIcon from "../../../../assets/img/wishlist-icon.svg";
</script>
