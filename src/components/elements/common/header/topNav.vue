<template>
  <section class="top-nav">
    <b-container>
      <b-nav-bar-nav class="top-nav__navbar" tag="div">
        <b-nav tag="div">
          <b-nav-item to="/account/wishlist" class="top-nav__link ml-auto">Wish List</b-nav-item>
          <b-nav-item-dropdown class="top-nav__dropdown" right>
            <template slot="button-content">
              <vf-icon :icon="['far', 'user-circle']"/>
            </template>
            <b-dropdown-item v-if="!auth" to="/account/login">Sign In</b-dropdown-item>
            <b-dropdown-item v-if="!auth" to="/account/register">Register</b-dropdown-item>
            <b-dropdown-item v-if="auth" to="/account">My Account</b-dropdown-item>
            <b-dropdown-item to="/account/wishlist">Wishlist</b-dropdown-item>
            <b-dropdown-item v-if="auth" @click="handleLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-nav-bar-nav>
    </b-container>
  </section>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BNav from "bootstrap-vue/es/components/nav/nav";
import BNavItem from "bootstrap-vue/es/components/nav/nav-item";
import BNavBarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import BNavText from "bootstrap-vue/es/components/nav/nav-text";
import BNavItemDropdown from "bootstrap-vue/es/components/nav/nav-item-dropdown";
import BDropdownItem from "bootstrap-vue/es/components/dropdown/dropdown-item";
import BLink from "bootstrap-vue/es/components/link/link";
import "vuefront/scss/elements/common/header/topNav.scss";
import { mapGetters } from "vuex";
export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
    BNavBarNav,
    BNavItemDropdown,
    BDropdownItem,
    BLink,
    BNavText
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

