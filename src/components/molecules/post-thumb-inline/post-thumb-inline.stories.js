import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './post-thumb-inline.vue';


storiesOf('molecule|Post Thumb Inline', module)
    .add(
        'default',
        () => ({
            components: { vfMPostThumbInline: component },
            template: `<vf-m-post-thumb-inline show="true">This is an alert message</vf-m-post-thumb-inline>`
        }), {
            info: {}
        }
    )