import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './compare-link.vue';


storiesOf('molecule|Compare Link', module)
    .add(
        'default',
        () => ({
            components: { vfMCompareLink: component },
            template: `<vf-m-compare-link />`
        }), {
            info: {}
        }
    )