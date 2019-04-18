<template>
  <div class="nav-section">
    <b-container>
      <b-nav-bar-nav class="nav-section__navbar" tag="div">
        <b-link to="/">
          <img :src="logo" alt class="nav-section__logo">
        </b-link>
        <vf-nav-search class="mx-auto"/>
        <b-nav tag="div">
          <b-nav-item to="/store/cart" class="nav-section__link">
            <vf-icon icon="shopping-cart"/>
            Shopping Cart
          </b-nav-item>
        </b-nav>
      </b-nav-bar-nav>
    </b-container>
  </div>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BNav from "bootstrap-vue/es/components/nav/nav";
import BNavItem from "bootstrap-vue/es/components/nav/nav-item";
import BNavBarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import BLink from "bootstrap-vue/es/components/link/link";
import "vuefront/scss/elements/common/header/nav.scss";

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
    BNavBarNav,
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
