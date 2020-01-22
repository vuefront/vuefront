import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductThumbImage from './product-thumb-image.vue';
import product from '@/.storybook/store/product.js';

Vue.component('vfMProductThumbImage', vfMProductThumbImage);


storiesOf('molecule|Product Thumb Image', module)
    .add(
        'default',
        () => ({
            components: { vfMProductThumbImage },
            template: `<vf-m-product-thumb-image :product="product">This is an alert message</vf-m-product-thumb-image>`,
            data: () => ({ product })
        }), {
            info: {}
        }
    )