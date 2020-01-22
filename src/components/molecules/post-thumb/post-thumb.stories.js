import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMPostThumb from './post-thumb.vue';
import vfLMPostThumb from './post-thumb.loader.vue';
import post from '@/.storybook/store/post.js';

Vue.component('vfMPostThumb', vfMPostThumb);

storiesOf('molecule|Post Thumb', module)
    .add(
        'default',
        () => ({
            components: { vfMPostThumb },
            template: `<div style="max-width:300px">
            <vf-m-post-thumb :post="post"></vf-m-post-thumb>
            </div>`,
            data: () => ({ post })
        }), {
            info: {}
        }
    )
    .add(
        'loading',
        () => ({
            components: { vfLMPostThumb },
            template: `<div style="width:300px">
            <vf-l-m-post-thumb ></vf-l-m-post-thumb>
            </div>`
        }), {
            info: {}
        }
    )
    .add(
        'loaded',
        () => ({
            components: { vfMPostThumb, vfLMPostThumb },
            template: `<div style="width:300px">
            <vf-m-post-thumb v-if="loaded" :post="post"></vf-m-post-thumb>
            <vf-l-m-post-thumb v-else></vf-l-m-post-thumb>
            </div>`,
            data: () => ({ post, loaded: false }),
            mounted() {
                setTimeout(() => {
                    this.loaded = true;
                }, 1500);
            }
        }), {
            info: {}
        }
    )