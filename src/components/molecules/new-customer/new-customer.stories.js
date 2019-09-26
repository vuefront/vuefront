import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './new-customer.vue';


storiesOf('molecule|New Customer', module)
    .add(
        'default',
        () => ({
            components: { vfMNewCustomer: component },
            template: `<vf-m-new-customer show="true">This is an alert message</vf-m-new-customer>`
        }), {
            info: {}
        }
    )