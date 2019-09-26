import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './wishlist-link.vue';


storiesOf('molecule|Wishlist Link', module)
    .add(
        'default',
        () => ({
            components: { vfMWishlistLink: component },
            template: `<vf-m-wishlist-link show="true">This is an alert message</vf-m-wishlist-link>`
        }), {
            info: {}
        }
    )