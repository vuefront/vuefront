import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './location-thumb.vue';


storiesOf('molecule|Location Thumb', module)
    .add(
        'default',
        () => ({
            components: { vfMLocationThumb: component },
            template: `<vf-m-location-thumb show="true">This is an alert message</vf-m-location-thumb>`
        }), {
            info: {}
        }
    )