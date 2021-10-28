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
          class="flex sm:text-right md:justify-end"
        >
          <vf-o-search-inline-form />
          <vf-m-wishlist-link />
          <vf-m-account-menu />
          <vf-m-cart-link />
        </vf-m-col>
      </vf-m-row>
    </vf-m-container>
    <vf-o-position class="vf-o-header__menu" name="headerMenu" />
  </section>
</template>
<style lang="scss">
.vf-o-header {
  @apply hidden;
  @media screen and (min-width: 768px) {
    @apply block;
  }
  .dropdown {
    > .btn {
      &.btn-link,
      &.btn-link:hover {
        @apply text-black text-base py-0 px-2;
      }
      &.btn-link {
        &:after {
          @apply hidden;
        }
      }
    }
  }
  &__top {
    @apply py-8;
    button,
    button:hover,
    a,
    a:hover {
      &:not([aria-controls]):not(.vf-e-common-menu__link) {
        @apply p-2 text-black;
      }
    }
  }
}
</style>
