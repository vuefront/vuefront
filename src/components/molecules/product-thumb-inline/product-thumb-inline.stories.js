import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-thumb-inline.vue';


storiesOf('molecule|Product Thumb Inline', module)
    .add(
        'default',
        () => ({
            components: { vfMProductThumbInline: component },
            template: `<vf-m-product-thumb-inline show="true">This is an alert message</vf-m-product-thumb-inline>`
        }), {
            info: {}
        }
    )