import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './post-thumb.vue';


storiesOf('molecule|Post Thumb', module)
    .add(
        'default',
        () => ({
            components: { vfMPostThumb: component },
            template: `<vf-m-post-thumb show="true">This is an alert message</vf-m-post-thumb>`
        }), {
            info: {}
        }
    )