import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-price.vue';


storiesOf('molecule|Product Price', module)
    .add(
        'default',
        () => ({
            components: { vfMProductPrice: component },
            template: `<vf-m-product-price show="true">This is an alert message</vf-m-product-price>`
        }), {
            info: {}
        }
    )