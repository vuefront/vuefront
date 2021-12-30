<template>
  <section class="module-pages">
    <vf-a-heading level="6" class="heading mb-3">{{
      $t("modules.common.accountLinks.textTitle")
    }}</vf-a-heading>
    <ul class="list-unstyled">
      <li v-if="!auth && includes(links, 'login')">
        <vf-a-link to="/account/login">{{
          $t("modules.common.accountLinks.signInText")
        }}</vf-a-link>
      </li>
      <li v-if="!auth && includes(links, 'register')">
        <vf-a-link to="/account/register">{{
          $t("modules.common.accountLinks.registerText")
        }}</vf-a-link>
      </li>
      <li v-if="auth && includes(links, 'account')">
        <vf-a-link to="/account">{{
          $t("modules.common.accountLinks.myAccountText")
        }}</vf-a-link>
      </li>
      <li v-if="auth && includes(links, 'edit-account')">
        <vf-a-link to="/account/edit">{{
          $t("modules.common.accountLinks.editAccountText")
        }}</vf-a-link>
      </li>
      <li v-if="auth && includes(links, 'password')">
        <vf-a-link to="/account/password">{{
          $t("modules.common.accountLinks.passwordText")
        }}</vf-a-link>
      </li>
      <li v-if="auth && includes(links, 'address')">
        <vf-a-link to="/account/address">{{
          $t("modules.common.accountLinks.addressText")
        }}</vf-a-link>
      </li>
      <li v-if="auth && includes(links, 'wishlist')">
        <vf-a-link to="/account/wishlist">{{
          $t("modules.common.accountLinks.wishlistText")
        }}</vf-a-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { includes } from "lodash";
import { mapGetters } from "vuex";
export default {
  props: {
    links: {
      type: Array,
      default() {
        return ["login", "register", "account", "wishlist"];
      },
    },
  },
  computed: {
    ...mapGetters({
      auth: "common/customer/auth",
    }),
  },
  methods: {
    includes,
  },
};
</script>
