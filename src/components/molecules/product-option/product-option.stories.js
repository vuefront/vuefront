import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductOptionText from './text.vue';
import vfMProductOptionSelect from './select.vue';
import vfMProductOptionRadio from './radio.vue';
import vfMProductOptionCheckbox from './checkbox.vue';
import vfMProductOptionTextarea from './textarea.vue';
import vfMProductOptionDatetime from './datetime.vue';
import vfMProductOptionDate from './date.vue';
import vfMProductOptionTime from './time.vue';
import vfMProductOptionFile from './file.vue';

import product from '@/.storybook/store/product.js';

storiesOf('molecule|Product Option', module)
    .add(
        'text',
        () => ({
            components: { vfMProductOptionText },
            template: `<vf-m-product-option-text :option="option"/>`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'select',
        () => ({
            components: { vfMProductOptionSelect },
            template: `<vf-m-product-option-select :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'radio',
        () => ({
            components: { vfMProductOptionRadio },
            template: `<vf-m-product-option-radio :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'checkbox',
        () => ({
            components: { vfMProductOptionCheckbox },
            template: `<vf-m-product-option-checkbox :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'textarea',
        () => ({
            components: { vfMProductOptionTextarea },
            template: `<vf-m-product-option-textarea :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'date',
        () => ({
            components: { vfMProductOptionDate },
            template: `<vf-m-product-option-date :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'datetime',
        () => ({
            components: { vfMProductOptionDatetime },
            template: `<vf-m-product-option-datetime :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'time',
        () => ({
            components: { vfMProductOptionTime },
            template: `<vf-m-product-option-time :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )
    .add(
        'file',
        () => ({
            components: { vfMProductOptionFile },
            template: `<vf-m-product-option-file :option="option" />`,
            data: () => ({
                option: product.options[0]
            })
        }), {
            info: {}
        }
    )