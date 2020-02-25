import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMPostNav from './post-nav.vue';
import post from '@/.storybook/store/post.js';

Vue.component('vfMPostNav', vfMPostNav)


storiesOf('molecule|Post Nav', module)
    .add(
        'default',
        () => ({
            components: { vfMPostNav },
            template: `<div style="width:800px"><vf-m-post-nav :post="post" /></div>`,
            data: () => ({ post })
        }), {
            info: {}
        }
    )