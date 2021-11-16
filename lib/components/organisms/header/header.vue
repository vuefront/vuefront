<template>
  <section class="vf-o-header md:block hidden">
    <vf-m-container>
      <vf-m-row class="vf-o-header__top">
        <vf-m-col md="4" align-self="center" class="sm:text-left">
          <vf-o-currency />
          <vf-o-language />
        </vf-m-col>
        <vf-m-col md="4" class="md:text-center">
          <vf-m-logo />
        </vf-m-col>
        <vf-m-col
          md="4"
          align-self="center"
          class="flex md:gap-4 sm:text-right md:justify-end"
        >
          <vf-o-search-inline-form />
          <vf-m-wishlist-link />
          <vf-m-account-menu />
          <vf-o-cart />
        </vf-m-col>
      </vf-m-row>
    </vf-m-container>
    <vf-o-position class="vf-o-header__menu" name="headerMenu" />
  </section>
</template>
