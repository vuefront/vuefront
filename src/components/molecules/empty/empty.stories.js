import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './empty.vue';


storiesOf('molecule|Empty', module)
    .add(
        'default',
        () => ({
            components: { vfMEmpty: component },
            template: `<vf-m-empty show="true">This is an alert message</vf-m-empty>`
        }), {
            info: {}
        }
    )