<template>
  <section class="module-pages">
    <h6 class="heading mb-3">Account</h6>
    <ul class="list-unstyled">
      <li>
        <b-link to="/account/login">Sign In</b-link>
      </li>
      <li>
        <b-link to="/account/register">Register</b-link>
      </li>
      <li>
        <b-link to="/account">My Account</b-link>
      </li>
      <li>
        <b-link to="/account/wishlist">Wishlist</b-link>
      </li>
    </ul>
  </section>
</template>
<script>
import BLink from "bootstrap-vue/es/components/link/link";
export default {
  components: {
    BLink
  }
};
</script>

