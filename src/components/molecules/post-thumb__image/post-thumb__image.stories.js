import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './post-thumb__image.vue';


storiesOf('molecule|Post Thumb Image', module)
    .add(
        'default',
        () => ({
            components: { vfMPostThumb__image: component },
            template: `<vf-m-post-thumb__image show="true">This is an alert message</vf-m-post-thumb__image>`
        }), {
            info: {}
        }
    )