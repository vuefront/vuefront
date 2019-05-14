<template>
  <section class="account-account">
    <h2>My Account</h2>
    <ul class="list-unstyled">
      <li>
        <b-link to="/account/edit">Edit your account information</b-link>
      </li>
      <li>
        <b-link to="/account/password">Change your password</b-link>
      </li>
      <li>
        <b-link to="/account/address">Modify your address book entries</b-link>
      </li>
      <li>
        <b-link to="/account/wishlist">Modify your wish list</b-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { BLink } from "bootstrap-vue/es/components";
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
