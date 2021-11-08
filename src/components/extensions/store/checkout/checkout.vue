<template>
  <vf-o-apollo v-slot="{ data }" class="vf-e-store-checkout">
    <div>{{ isClient ? handleRedirect(data.checkoutLink.link) : "" }}</div>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const isClient = computed(() => !!document);

const handleRedirect = (url: string) => {
  window.location.href = url;
};
</script>
<graphql>
{
  checkoutLink {
    link
  }
}
</graphql>
