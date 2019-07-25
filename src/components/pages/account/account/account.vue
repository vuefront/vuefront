<template>
  <vf-t-account />
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: {
    BLink
  },
  fetch(ctx) {
    if (!ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account/login");
    }
  }
};
</script>
