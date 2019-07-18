<template>
  <section class="top-nav">
    <b-container>
      <b-navbar-nav class="top-nav__navbar" tag="div">
        <b-nav tag="div">
          <vf-currency />
          <vf-language />
          <b-nav-item
            to="/store/compare"
            class="top-nav__link ml-auto"
          >{{$t('elements.common.header.topNav.compareText')}}</b-nav-item>
          <b-nav-item
            to="/account/wishlist"
            class="top-nav__link"
          >{{$t('elements.common.header.topNav.wishListText')}}</b-nav-item>
          <b-nav-item-dropdown class="top-nav__dropdown" right>
            <template slot="button-content">
              <vf-icon :icon="['far', 'user-circle']" />
            </template>
            <b-dropdown-item
              v-if="!auth"
              to="/account/login"
            >{{$t('elements.common.header.topNav.signInText')}}</b-dropdown-item>
            <b-dropdown-item
              v-if="!auth"
              to="/account/register"
            >{{$t('elements.common.header.topNav.registerText')}}</b-dropdown-item>
            <b-dropdown-item
              v-if="auth"
              to="/account"
            >{{$t('elements.common.header.topNav.myAccountText')}}</b-dropdown-item>
            <b-dropdown-item
              to="/account/wishlist"
            >{{$t('elements.common.header.topNav.wishlistText')}}</b-dropdown-item>
            <b-dropdown-item
              v-if="auth"
              @click="handleLogout"
            >{{$t('elements.common.header.topNav.signOutText')}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-navbar-nav>
    </b-container>
  </section>
</template>
<script>
import {
  BContainer,
  BNav,
  BNavItem,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    BContainer,
    BNav,
    BNavItem,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
  },
  computed: {
    ...mapGetters({
      auth: 'common/customer/auth',
    }),
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('common/customer/logout')
      this.$router.push('/account/login')
    },
  },
}
</script>
<style lang="scss">
.top-nav {
  .nav-link {
    padding: 0.5rem 0.5rem;
    color: rgba(31, 45, 61, 0.5);
  }
  &__dropdown {
    .dropdown-toggle {
      &:after {
        display: none;
      }
    }
  }
}
</style>
