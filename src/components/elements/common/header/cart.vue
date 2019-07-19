<template>
  <b-link to="/store/cart" class="nav-section__link">
    <vf-a-icon icon="shopping-cart"/>
    <span class="d-none d-md-inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
  </b-link>
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: { BLink },
};
</script>
