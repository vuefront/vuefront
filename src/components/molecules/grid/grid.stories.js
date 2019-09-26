import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMRow from './row.vue';
import vfMCol from './row.vue';


storiesOf('molecule|Row & Col', module)
    .add(
        'default',
        () => ({
            components: { vfMRow, vfMCol },
            template: `<vf-m-row><vf-m-col>This is an alert message</vf-m-col></vf-m-row>`
        }), {
            info: {}
        }
    )