<template>
  <div class="nav-section">
    <b-container>
      <b-row class="nav-section__navbar">
        <b-col sm="12" md class="text-center text-md-left mb-3 mb-md-0">
          <slot name="left"></slot>
        </b-col>
        <b-col sm="12" md="auto" class="mb-3 mb-md-0">
          <slot name="center"></slot>
        </b-col>
        <b-col sm="12" md class="text-center text-md-right">
          <slot name="right"></slot>
        </b-col>
      </b-row>
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
} from "bootstrap-vue";
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
  }
};
</script>
