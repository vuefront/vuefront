import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './media.vue';
import mediaAside from './media-aside.vue';
import mediaBody from './media-body.vue';


storiesOf('molecule|Media', module)
    .add(
        'default',
        () => ({
            components: { vfMMedia: component, vfMMediaAside: mediaAside, vfMMediaBody: mediaBody },
            template: `<vf-m-media show="true">This is an alert message</vf-m-media>`
        }), {
            info: {}
        }
    )