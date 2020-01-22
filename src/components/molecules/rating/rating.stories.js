import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMRating from './rating.vue';
import vfLMRating from './rating.loader.vue';

Vue.component('vfMRating', vfMRating);

storiesOf('molecule|Rating', module)
    .add(
        'default',
        () => ({
            components: { vfMRating },
            template: `<vf-m-rating value="3"></vf-m-rating>`
        }), {
            info: {}
        }
    )
    .add(
        'loading',
        () => ({
            components: { vfLMRating },
            template: `
            <vf-l-m-rating ></vf-l-m-rating>
            `
        }), {
            info: {}
        }
    )
    .add(
        'loaded',
        () => ({
            components: { vfMRating, vfLMRating },
            template: `<div>
            <vf-m-rating v-if="loaded" value="5"></vf-m-rating>
            <vf-l-m-rating v-else></vf-l-m-rating>
            </div>`,
            data: () => ({ loaded: false }),
            mounted() {
                setTimeout(() => {
                    this.loaded = true;
                }, 1500);
            }
        }), {
            info: {}
        }
    )