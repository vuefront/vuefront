<template>
  <section class="vf-o-header md:block hidden">
    <vf-m-container>
      <vf-m-row class="mb-3 py-2 vf-o-header__top">
        <vf-m-col align-self="center" class="sm:text-left">
          <vf-o-currency />
          <vf-o-language />
        </vf-m-col>
        <vf-m-col align-self="center" class="sm:text-right">
          <vf-m-compare-link class="ml-auto" />
          <vf-m-wishlist-link />
          <vf-m-account-menu />
        </vf-m-col>
      </vf-m-row>
      <vf-m-row class="mb-3 vf-o-header__bottom">
        <vf-m-col class="md:text-left" align-self="center">
          <vf-m-logo />
        </vf-m-col>
        <vf-m-col md="auto" align-self="center">
          <vf-o-search-inline-form class="mx-auto" />
        </vf-m-col>
        <vf-m-col class="md:text-right" align-self="center">
          <vf-m-cart-link />
        </vf-m-col>
      </vf-m-row>
      <vf-o-position class="vf-o-header__menu" name="headerMenu" />
    </vf-m-container>
  </section>
</template>
<style lang="scss">
.vf-o-header {
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  .dropdown {
    > .btn {
      &.btn-link,
      &.btn-link:hover {
        padding: 0 0.5rem;
        color: rgba(31, 45, 61, 0.5);
        font-size: 1rem;
      }
      &.btn-link {
        &:after {
          display: none;
        }
      }
    }
  }
  &__top {
    button,
    button:hover,
    a,
    a:hover {
      &:not([aria-controls]):not(.vf-e-common-menu__link) {
        padding: 0.5rem 0.5rem;
        color: rgba(31, 45, 61, 0.5);
      }
    }
  }
}
</style>
