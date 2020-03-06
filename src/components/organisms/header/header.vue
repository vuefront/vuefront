<template>
  <section class="vf-o-header">
    <vf-m-container>
      <vf-m-row class="mb-3 py-2 vf-o-header__top">
        <vf-m-col align-self="center" class="text-sm-left">
          <vf-o-currency />
          <vf-o-language />
        </vf-m-col>
        <vf-m-col align-self="center" class="text-sm-right">
          <vf-m-compare-link class="ml-auto" />
          <vf-m-wishlist-link />
          <vf-m-account-menu />
        </vf-m-col>
      </vf-m-row>
      <vf-m-row class="mb-3 vf-o-header__bottom">
        <vf-m-col md class="text-md-left" align-self="center">
          <vf-m-logo />
        </vf-m-col>
        <vf-m-col md="auto" align-self="center">
          <vf-o-search-inline-form class="mx-auto" />
        </vf-m-col>
        <vf-m-col md class="text-md-right" align-self="center">
          <vf-m-cart-link />
        </vf-m-col>
      </vf-m-row>
      <vf-o-position class="vf-o-header__menu" name="headerMenu" />
    </vf-m-container>
  </section>
</template>