import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-attribute.vue';
import product from '@/.storybook/store/product.js';


storiesOf('molecule|Product Attribute', module)
    .addDecorator((story) => ({
        template: `<div style="width:400px"><story/></div>`
    }))
    .add(
        'default',
        () => ({
            components: { vfMProductAttribute: component },
            template: `<vf-m-product-attribute :attributes="attributes"></vf-m-product-attribute>`,
            data: () => ({ attributes: product.attributes })
        }), {
            info: {}
        }
    )
    .add(
        'one attribute',
        () => ({
            components: { vfMProductAttribute: component },
            template: `<vf-m-product-attribute :attributes="attributes"></vf-m-product-attribute>`,
            data: () => ({
                attributes: [{
                    "name": "Clockspeed",
                    "options": [
                        "100mhz"
                    ],
                    "__typename": "productAttribute"
                }]
            })
        }), {
            info: {}
        }
    )