import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-image.vue';
import mProductImagePopup from './popup.vue';


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
    .add(
        'default',
        () => ({
            components: { vfMProductImagePopup: mProductImagePopup },
            template: `<vf-m-product-image-popup show="true">This is an alert message</vf-m-product-image-popup>`
        }), {
            info: {}
        }
    )