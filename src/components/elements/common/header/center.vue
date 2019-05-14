<template>
  <div class="nav-section">
    <b-container>
      <b-navbar-nav class="nav-section__navbar" tag="div">
        <b-link to="/">
          <img :src="logo" alt class="nav-section__logo">
        </b-link>
        <vf-header-search class="mx-auto"/>
        <b-nav tag="div">
          <b-nav-item to="/store/cart" class="nav-section__link">
            <vf-icon icon="shopping-cart"/>
            {{$t('elements.common.header.nav.shoppingCartText')}}
          </b-nav-item>
        </b-nav>
      </b-navbar-nav>
    </b-container>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BContainer,
  BNav,
  BNavItem,
  BNavbarNav,
  BLink
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/common/header/nav.scss";

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
    BNavbarNav,
    BLink
  },
  props: {
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>
