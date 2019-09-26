import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-thumb__image.vue';


storiesOf('molecule|Product Thumb Image', module)
    .add(
        'default',
        () => ({
            components: { vfMProductThumb__image: component },
            template: `<vf-m-product-thumb__image show="true">This is an alert message</vf-m-product-thumb__image>`
        }), {
            info: {}
        }
    )