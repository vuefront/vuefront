<template>
  <section class="module-common-account mb-4">
    <b-list-group>
      <b-list-group-item v-if="!auth" to="/account/login">{{$t('modules.common.account.loginText')}}</b-list-group-item>
      <b-list-group-item
        v-if="!auth"
        to="/account/register"
      >{{$t('modules.common.account.registerText')}}</b-list-group-item>
      <b-list-group-item to="/account">{{$t('modules.common.account.myAccountText')}}</b-list-group-item>
      <b-list-group-item
        v-if="auth"
        to="/account/edit"
      >{{$t('modules.common.account.editAccountText')}}</b-list-group-item>
      <b-list-group-item
        v-if="auth"
        to="/account/password"
      >{{$t('modules.common.account.passwordText')}}</b-list-group-item>
      <b-list-group-item
        v-if="auth"
        to="/account/address"
      >{{$t('modules.common.account.addressText')}}</b-list-group-item>
      <b-list-group-item to="/account/wishlist">{{$t('modules.common.account.wishlistText')}}</b-list-group-item>
      <b-list-group-item
        v-if="auth"
        @click="handleLogout"
      >{{$t('modules.common.account.logoutText')}}</b-list-group-item>
    </b-list-group>
  </section>
</template>
<script>
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BListGroup,
    BListGroupItem
  },
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
