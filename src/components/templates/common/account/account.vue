<template>
  <section class="account-account">Account-account</section>
</template>
<script>
export default {
  fetch(ctx) {
    if (!ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account/login");
    }
  }
};
</script>
