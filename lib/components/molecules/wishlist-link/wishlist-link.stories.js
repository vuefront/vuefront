import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMWishlistLink from './wishlist-link.vue';
storiesOf('molecule|Wishlist Link', module).add('default', function () {
  return {
    components: {
      vfMWishlistLink: vfMWishlistLink
    },
    template: "<vf-m-wishlist-link></vf-m-wishlist-link>"
  };
}, {
  info: {}
});