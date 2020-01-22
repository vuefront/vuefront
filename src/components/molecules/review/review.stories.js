import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMReview from './review.vue';

Vue.component('vfMReview', vfMReview);

storiesOf('molecule|Review', module)
    .addDecorator((story) => ({
        template: `<div style="width:300px"><story/></div>`
    }))
    .add(
        'default',
        () => ({
            components: { vfMReview },
            template: `<vf-m-review :review="review"></vf-m-review>`,
            data() {
                return {
                    review: {
                        "author": "John Doe",
                        "author_email": "",
                        "content": "This is a reivew",
                        "created_at": "13\/06\/2019",
                        "rating": 4
                    }
                }
            }
        }), {
            info: {}
        }
    )