import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-image.vue';


storiesOf('molecule|Product Image', module)
    .add(
        'default',
        () => ({
            components: { vfMProductImage: component },
            template: `<vf-m-product-image show="true">This is an alert message</vf-m-product-image>`
        }), {
            info: {}
        }
    )