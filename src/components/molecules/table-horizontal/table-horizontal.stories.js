import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './table-horizontal.vue';


storiesOf('molecule|Table Horizontal', module)
    .add(
        'default',
        () => ({
            components: { vfMTableHorizontal: component },
            template: `<vf-m-table-horizontal show="true">This is an alert message</vf-m-table-horizontal>`
        }), {
            info: {}
        }
    )