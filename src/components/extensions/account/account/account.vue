<template>
  <section class="module-common-account mb-4">
    <vf-m-list-group>
      <vf-m-list-group-item v-if="!auth" to="/account/login">{{$t('modules.common.account.loginText')}}</vf-m-list-group-item>
      <vf-m-list-group-item
        v-if="!auth"
        to="/account/register"
      >{{$t('modules.common.account.registerText')}}</vf-m-list-group-item>
      <vf-m-list-group-item to="/account">{{$t('modules.common.account.myAccountText')}}</vf-m-list-group-item>
      <vf-m-list-group-item
        v-if="auth"
        to="/account/edit"
      >{{$t('modules.common.account.editAccountText')}}</vf-m-list-group-item>
      <vf-m-list-group-item
        v-if="auth"
        to="/account/password"
      >{{$t('modules.common.account.passwordText')}}</vf-m-list-group-item>
      <vf-m-list-group-item
        v-if="auth"
        to="/account/address"
      >{{$t('modules.common.account.addressText')}}</vf-m-list-group-item>
      <vf-m-list-group-item to="/account/wishlist">{{$t('modules.common.account.wishlistText')}}</vf-m-list-group-item>
      <vf-m-list-group-item
        v-if="auth"
        @click="handleLogout"
      >{{$t('modules.common.account.logoutText')}}</vf-m-list-group-item>
    </vf-m-list-group>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      auth: "common/customer/auth"
    })
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch("common/customer/logout");
      this.$router.push("/account/login");
    }
  }
};
</script>
