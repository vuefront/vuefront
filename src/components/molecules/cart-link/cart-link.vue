<template>
  <vf-a-link class="vf-m-cart-link" to="/store/cart">
    <vf-a-icon icon="shopping-cart" />
    <span class="d-none d-md-inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
  </vf-a-link>
</template>
<style lang="scss">
@import './cart-link';
</style>