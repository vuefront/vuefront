import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './cart-link.vue';


storiesOf('molecule|Cart Link', module)
    .add(
        'default',
        () => ({
            components: { vfMCartLink: component },
            template: `<vf-m-cart-link></vf-m-cart-link>`
        }), {
            info: {}
        }
    )