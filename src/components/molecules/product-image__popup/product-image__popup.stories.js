import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-image__popup.vue';


storiesOf('molecule|Product Image Popup', module)
    .add(
        'default',
        () => ({
            components: { vfMProductImage__popup: component },
            template: `<vf-m-product-image__popup show="true">This is an alert message</vf-m-product-image__popup>`
        }), {
            info: {}
        }
    )