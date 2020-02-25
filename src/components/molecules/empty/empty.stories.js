import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './empty.vue';


storiesOf('molecule|!!!Empty', module)
    .add(
        'default',
        () => ({
            components: { vfMEmpty: component },
            template: `<vf-m-empty>You have no posts</vf-m-empty>`
        }), {
            info: {
                summary: `Used to inform the user that there are no items (like posts or products) to display.`
            }
        }
    )