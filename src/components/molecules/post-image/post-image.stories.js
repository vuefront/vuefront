import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './post-image.vue';


storiesOf('molecule|Post Image', module)
    .add(
        'default',
        () => ({
            components: { vfMPostImage: component },
            template: `<vf-m-post-image show="true">This is an alert message</vf-m-post-image>`
        }), {
            info: {}
        }
    )