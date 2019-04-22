<template>
  <section class="module-common-account mb-4">
    <b-list-group>
      <b-list-group-item v-if="!auth" to="/account/login">Login</b-list-group-item>
      <b-list-group-item v-if="!auth" to="/account/register">Register</b-list-group-item>
      <b-list-group-item to="/account">My Account</b-list-group-item>
      <b-list-group-item v-if="auth" to="/account/edit">Edit Account</b-list-group-item>
      <b-list-group-item v-if="auth" to="/account/password">Password</b-list-group-item>
      <b-list-group-item to="/account/wishlist">Wish List</b-list-group-item>
      <b-list-group-item v-if="auth" @click="handleLogout">Logout</b-list-group-item>
    </b-list-group>
  </section>
</template>
<script>
import BListGroup from "bootstrap-vue/es/components/list-group/list-group";
import BListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
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
