<template>
  <vf-t-account-register />
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