import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './container.vue';


storiesOf('molecule|Container', module)
    .add(
        'default',
        () => ({
            components: { vfMContainer: component },
            template: `<vf-m-container show="true">This is an alert message</vf-m-container>`
        }), {
            info: {}
        }
    )