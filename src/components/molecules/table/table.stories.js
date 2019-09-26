import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './table.vue';


storiesOf('molecule|Table', module)
    .add(
        'default',
        () => ({
            components: { vfMTable: component },
            template: `<vf-m-table show="true">This is an alert message</vf-m-table>`
        }), {
            info: {}
        }
    )