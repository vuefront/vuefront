import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-attribute.vue';


storiesOf('molecule|Product Attribute', module)
    .add(
        'default',
        () => ({
            components: { vfMProductAttribute: component },
            template: `<vf-m-product-attribute show="true">This is an alert message</vf-m-product-attribute>`
        }), {
            info: {}
        }
    )