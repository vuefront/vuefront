<template>
  <vf-t-account-login />
</template>
<script>
export default {
  fetch(ctx) {
    if (ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account");
    }
  }
};
</script>

