import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMPostThumbInline from './post-thumb-inline.vue';
import post from '@/.storybook/store/post.js';

Vue.component('vfMPostThumbInline', vfMPostThumbInline);

storiesOf('molecule|Post Thumb Inline', module)
    .add(
        'default',
        () => ({
            components: { vfMPostThumbInline },
            template: `<div style="max-width:400px"><vf-m-post-thumb-inline :post="post"></vf-m-post-thumb-inline><div>`,
            data: () => ({ post })
        }), {
            info: {}
        }
    )