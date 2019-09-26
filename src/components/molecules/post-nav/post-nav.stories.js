import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './post-nav.vue';


storiesOf('molecule|Post Nav', module)
    .add(
        'default',
        () => ({
            components: { vfMPostNav: component },
            template: `<vf-m-post-nav show="true">This is an alert message</vf-m-post-nav>`
        }), {
            info: {}
        }
    )